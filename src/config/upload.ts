import { Request } from 'express';
import path from 'path';
import multer from 'multer';
import crypto from 'crypto';

const uploadFoalder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
  directory: uploadFoalder,
  storage: multer.diskStorage({
    destination: uploadFoalder,
    filename(Request, file, callback) {
      const filehash = crypto.randomBytes(10).toString('hex');

      const filename = `${filehash}-${file.originalname}`;

      callback(null, filename);
    },
  }),
};
