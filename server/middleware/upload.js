import multer from "multer";

import {
  CloudinaryStorage,
} from "multer-storage-cloudinary";

import cloudinary
  from "../config/cloudinary.js";

// CLOUDINARY STORAGE
const storage =
  new CloudinaryStorage({

    cloudinary,

    params: {

      folder:
        "gogot-campaign",

      allowed_formats: [
        "jpg",
        "jpeg",
        "png",
        "webp",
      ],

    },

  });

// MULTER CONFIG
const upload =
  multer({

    storage,

    limits: {

      fileSize:
        5 * 1024 * 1024,

    },

  });

export default upload;