import { cloudinary, cloudinaryStorage } from './cloudinary';

export const deleteFile = async (url) => {
  try {
    const publicId = prettyFileName(url);
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    throw error;
  }
};

export const deleteFiles = async (urls) => {
  try {
    const publicIds = urls.map((url) => prettyFileName(url));
    const result = await cloudinary.api.delete_resources(publicIds);
    return result;
  } catch (error) {
    throw error;
  }
};

export const uploadFile = (path, name, folder) => {};

export const fileStorage = cloudinaryStorage;

export const getFileName = (file) => {
  return new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname;
};

export const prettyFileName = (url) => {
  const matches = url.match(/\/v\d+\/(.+)\.[a-z]+$/i);
  return matches ? matches[1] : null;
};
