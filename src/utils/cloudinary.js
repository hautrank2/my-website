import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { getFileName } from './fileUtil';

cloudinary.config({
  cloud_name: 'dhl9sisnc',
  api_key: '963397356778524',
  api_secret: 'TcAbFkBfFdkuqJ5FO--kb-xRJqU', // Click 'View API Keys' above to copy your API secret
});

export { cloudinary };

export const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const fileName = getFileName(file);
    return {
      folder: 'blog-test',
      public_id: fileName,
    };
  },
});

//Upload
// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './uploads/images');
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname
//     );
//   },
// });
