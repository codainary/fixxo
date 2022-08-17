const multer = require("multer");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/zip") {
    cb(null, true)
  } else {
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 375000, files: 1 }
});

module.exports = { upload };
