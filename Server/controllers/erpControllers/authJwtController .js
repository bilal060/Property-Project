const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { stubFalse } = require('lodash');
const mongoose = require('mongoose');
const Admin = mongoose.model('Admin');
const User = mongoose.model('User');
const Role = mongoose.model('Role');
require('dotenv').config({ path: '.variables.env' });

exports.register = async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, password, confirmPassword, userType } = req.body;

    // validate
    if (!firstName || !lastName || !email || !password || !confirmPassword || !userType)
      return res.status(400).json({
        success: false,
        result: null,
        message: 'Not all fields have been entered.',
      });

    if (password !== confirmPassword)
      return res.status(400).json({
        success: false,
        result: null,
        message: 'Password and confirm password are not matched.',
      });
    const cRole = await Role.findOne({ roleType: userType });
    const user = await User.findOne({ email: email, removed: false });
    if (user)
      return res.status(400).json({
        success: false,
        result: null,
        message: 'account already exist please Login.',
      });
    const newUser = new User();
    const passwordHash = newUser.generateHash(password);
    await new User({
      firstName, lastName, email, password: passwordHash, role: cRole._id
    }).save();

    res.json({
      success: true,
      result: null,
      message: 'Successfully registered user',
    });
  } catch (err) {
    res.status(500).json({ success: false, result: null, message: err.message, error: err });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({
        success: false,
        result: null,
        message: 'Not all fields have been entered.',
      });

    const user = await User.findOne({ email: email, removed: false });
    if (!user)
      return res.status(400).json({
        success: false,
        result: null,
        message: 'No account with this email has been registered.',
      });


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        success: false,
        result: null,
        message: 'Invalid credentials.',
      });

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role.roleType,
      },
      process.env.JWT_SECRET,
      { expiresIn: '72h' }
    );

    const result = await User.findOneAndUpdate(
      { _id: user._id },
      { isLoggedIn: true },
      {
        new: true,
      }
    ).exec();

    res.cookie('token', token, {
      maxAge: req.body.remember ? 72 * 60 * 60 * 1000 : 60 * 60 * 1000,
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    });

    res.json({
      success: true,
      result: {
        token,
        user: {
          _id: result._id,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          createdAt: result.createdAt,
          isLoggedIn: result.isLoggedIn
        }
      },
      message: 'Successfully login user',
    });
  } catch (err) {
    res.status(500).json({ success: false, result: null, message: err.message, error: err });
  }
};


// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // validate
//     if (!email || !password)
//       return res.status(400).json({
//         success: false,
//         result: null,
//         message: 'Not all fields have been entered.',
//       });

//     const admin = await Admin.findOne({ email: email, removed: false });
//     if (!admin)
//       return res.status(400).json({
//         success: false,
//         result: null,
//         message: 'No account with this email has been registered.',
//       });


//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch)
//       return res.status(400).json({
//         success: false,
//         result: null,
//         message: 'Invalid credentials.',
//       });

//     const token = jwt.sign(
//       {
//         id: admin._id,
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: '72h' }
//     );

//     const result = await Admin.findOneAndUpdate(
//       { _id: admin._id },
//       { isLoggedIn: true },
//       {
//         new: true,
//       }
//     ).exec();

//     res.cookie('token', token, {
//       maxAge: req.body.remember ? 72 * 60 * 60 * 1000 : 60 * 60 * 1000,
//       sameSite: 'none',
//       httpOnly: true,
//       secure: true,
//     });

//     res.json({
//       success: true,
//       result: {
//         token,
//         admin: {
//           id: result._id,
//           name: result.name,
//           isLoggedIn: result.isLoggedIn,
//         },
//       },
//       message: 'Successfully login admin',
//     });
//   } catch (err) {
//     res.status(500).json({ success: false, result: null, message: err.message, error: err });
//   }
// };

exports.isValidAdminToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token)
      return res.status(401).json({
        success: false,
        result: null,
        message: 'No authentication token, authorization denied.',
        jwtExpired: true,
      });

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified)
      return res.status(401).json({
        success: false,
        result: null,
        message: 'Token verification failed, authorization denied.',
        jwtExpired: true,
      });

    const admin = await Admin.findOne({ _id: verified.id, removed: false });
    if (!admin)
      return res.status(401).json({
        success: false,
        result: null,
        message: "Admin doens't Exist, authorization denied.",
        jwtExpired: true,
      });

    if (admin.isLoggedIn === false)
      return res.status(401).json({
        success: false,
        result: null,
        message: 'Admin is already logout try to login, authorization denied.',
        jwtExpired: true,
      });
    else {
      req.admin = admin;
      next();
    }
  } catch (err) {
    res.status(503).json({
      success: false,
      result: null,
      message: err.message,
      error: err,
    });
  }
};

exports.logout = async (req, res) => {
  const result = await Admin.findOneAndUpdate(
    { _id: req.admin._id },
    { isLoggedIn: false },
    {
      new: true,
    }
  ).exec();

  res.clearCookie('token');
  res.json({ isLoggedOut: true });
};



