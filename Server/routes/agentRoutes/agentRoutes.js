const express = require('express');
const multer = require('multer');
const path = require('path');
const setFilePathToBody = require('@/middlewares/setFilePathToBody');
const { catchErrors } = require('@/handlers/errorHandlers');
const router = express.Router();
const propertyController = require('@/controllers/erpControllers/propertyController');
const { isValidAgent } = require('@/middlewares/Authentication');

var adminPhotoStorage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'public/uploads/user');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const adminPhotoUpload = multer({ storage: adminPhotoStorage });


router.route('/property/create').post([adminPhotoUpload.single('photo'), setFilePathToBody], catchErrors(propertyController.create));
router.route('/property/list').get(catchErrors(propertyController.list));
router.route('/property/read/:id').get(catchErrors(propertyController.read));
router.route('/property/update/:id').patch(catchErrors(propertyController.update));
router.route('/property/delete/:id').delete(catchErrors(propertyController.delete));


module.exports = router;
