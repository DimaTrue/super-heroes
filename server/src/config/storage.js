const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const deleteFromClouinaryAllHeroImages = (public_ids) =>
  cloudinary.api.delete_resources(public_ids, function (err, res) {
    console.log('DELFROMCLOUD', res, err);
  });

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpg', 'png'],
    public_id: (req, file) =>
      `${uuidv4()}-${file.originalname.replace(/(\.[^/.]+)+$/, '')}`,
  },
});

module.exports = { storage, deleteFromClouinaryAllHeroImages };
