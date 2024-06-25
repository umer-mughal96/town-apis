const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir;
    if (file.fieldname.startsWith('members')) {
      dir = path.join(__dirname, '../../', 'public/uploads/members');
    } else if (file.fieldname.startsWith('buyerWitness')) {
      dir = path.join(__dirname, '../../', 'public/uploads/buyerWitness');
    } else if (file.fieldname.startsWith('sellerWitness')) {
      dir = path.join(__dirname, '../../', 'public/uploads/sellerWitness');
    } else if (file.fieldname.startsWith('photos')) {
      dir = path.join(__dirname, '../../', 'public/uploads/photos');
    } else if (file.fieldname.startsWith('videos')) {
      dir = path.join(__dirname, '../../', 'public/uploads/videos');
    } else {
      dir = path.join(__dirname, 'uploads');
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
