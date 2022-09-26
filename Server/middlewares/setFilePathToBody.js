//this middleware will check if the admin  is logged in, if not he will be redirected to the login page :)
exports.setSingleFilePathToBody = (req, res, next) => {
  if (req.file) {
    req.file.path
    req.body[req.file.fieldname] = req.file.filename;
  }

  // if (req.files) {
  //     req.body[req.files.fieldname] = req.files.path
  // }
  next();
};



exports.setMultipleFilePathToBody = (req, res, next) => {
  if (req.files) {
    const files = req.files.map(item => item.filename)
    req.body[req.files[0].fieldname] = files
  }
  next();
};



