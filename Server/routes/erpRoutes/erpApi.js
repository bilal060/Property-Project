const express = require('express');
const multer = require('multer');
const path = require('path');
const setFilePathToBody = require('@/middlewares/setFilePathToBody');
const { catchErrors } = require('@/handlers/errorHandlers');
const router = express.Router();
const adminController = require('@/controllers/erpControllers/adminController');
const roleController = require('@/controllers/erpControllers/roleController');
const societyController = require('@/controllers/erpControllers/societyController');
const phaseController = require('@/controllers/erpControllers/phaseController');
const blockController = require('@/controllers/erpControllers/blockController');
const propertyController = require('@/controllers/erpControllers/propertyController');
const { isValidAdminToken } = require('@/middlewares/Authentication');

// //_______________________________ Admin management_______________________________

var adminPhotoStorage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, 'public/uploads/user');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const adminPhotoUpload = multer({ storage: adminPhotoStorage });

router
  .route('/admin/create')
  .post([adminPhotoUpload.single('photo'), setFilePathToBody], catchErrors(adminController.create));
router.route('/admin/read/:id').get(isValidAdminToken, catchErrors(adminController.read));
// router.route("/admin/update/:id").patch(isValidAdminToken,catchErrors(adminController.update));
// router.route("/admin/delete/:id").delete(isValidAdminToken,catchErrors(adminController.delete));
router.route('/admin/search').get(isValidAdminToken, catchErrors(adminController.search));
router.route('/admin/list').get(isValidAdminToken, catchErrors(adminController.list));
router.route('/admin/profile').get(isValidAdminToken, catchErrors(adminController.profile));
router.route('/admin/status/:id').patch(isValidAdminToken, catchErrors(adminController.status));
// router
//   .route("/admin/photo")
//   .post(
//     [adminPhotoUpload.single("photo"), setFilePathToBody],
//     catchErrors(adminController.photo)
//   );
// router
//   .route("/admin/password-update/:id")
//   .patch(isValidAdminToken,catchErrors(adminController.updatePassword));

// //____________________________ Role management_______________________________

router.route('/role/create').post(isValidAdminToken, catchErrors(roleController.create));
router.route('/role/read/:id').get(isValidAdminToken, catchErrors(roleController.read));
router.route('/role/update/:id').patch(isValidAdminToken, catchErrors(roleController.update));
router.route('/role/delete/:id').delete(isValidAdminToken, catchErrors(roleController.delete));
router.route('/role/search').get(isValidAdminToken, catchErrors(roleController.search));
router.route('/role/list').get(isValidAdminToken, catchErrors(roleController.list));
router.route('/role/filter').get(isValidAdminToken, catchErrors(roleController.filter));


// ---------------------------------Api for Socities----------------

router.route('/society/create').post([adminPhotoUpload.single('photo'), setFilePathToBody], catchErrors(societyController.create));
router.route('/society/list').get(isValidAdminToken, catchErrors(societyController.list));
router.route('/society/read/:id').get(isValidAdminToken, catchErrors(societyController.read));
router.route('/society/update/:id').patch(isValidAdminToken, catchErrors(societyController.update));
router.route('/society/delete/:id').delete(isValidAdminToken, catchErrors(societyController.delete));
router.route('/society/getPictureByPath/:path').get(isValidAdminToken, catchErrors(societyController.getPictureByPath));



// // ---------------------------------Api for Phases----------------
router.route('/phase/create').post(isValidAdminToken, catchErrors(phaseController.create));
router.route('/phase/list').get(isValidAdminToken, catchErrors(phaseController.list));
router.route('/phase/read/:id').get(isValidAdminToken, catchErrors(phaseController.read));
router.route('/phase/update/:id').patch(isValidAdminToken, catchErrors(phaseController.update));
router.route('/phase/delete/:id').delete(isValidAdminToken, catchErrors(phaseController.delete));

// // ---------------------------------Api for Blocks-------------------
router.route('/block/create').post(isValidAdminToken, catchErrors(blockController.create));
router.route('/block/list').get(isValidAdminToken, catchErrors(blockController.list));
router.route('/block/read/:id').get(isValidAdminToken, catchErrors(blockController.read));
router.route('/block/update/:id').patch(isValidAdminToken, catchErrors(blockController.update));
router.route('/block/delete/:id').delete(isValidAdminToken, catchErrors(blockController.delete));

// // ---------------------------------Api for Property---------------------

router.route('/property/create').post(isValidAdminToken, catchErrors(propertyController.create));
router.route('/property/list').get(isValidAdminToken, catchErrors(propertyController.list));
router.route('/property/read/:id').get(isValidAdminToken, catchErrors(propertyController.read));
router.route('/property/update/:id').patch(isValidAdminToken, catchErrors(propertyController.update));
router.route('/property/delete/:id').delete(isValidAdminToken, catchErrors(propertyController.delete));


module.exports = router;
