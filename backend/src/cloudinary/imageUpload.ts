import cloudinary from "cloudinary";
import { ReadStream } from "fs";
import isBase64 from "validator/lib/isBase64";

export const uploadSingleImage = async (readStream: ReadStream) => {
  return await new Promise((resolve, reject) => {
    readStream.pipe(
      cloudinary.v2.uploader.upload_stream((error, result) => {
        if (error) {
          reject(error);
        }

        resolve(result);
      })
    );
  });
};

export const uploadSingleImageBase64Encoded = async (file: string) => {
  return await new Promise((resolve, reject) => {
    if (!isBase64(file)) {
      reject("Provided file is not encoded in Base 64 format");
    }
    cloudinary.v2.uploader.upload(file, (result, error) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
};
