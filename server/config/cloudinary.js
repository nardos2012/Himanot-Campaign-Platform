// import { v2 as cloudinary }
//   from "cloudinary";

// cloudinary.config({

//   cloud_name:
//     process.env
//       .CLOUDINARY_CLOUD_NAME,

//   api_key:
//     process.env
//       .CLOUDINARY_API_KEY,

//   api_secret:
//     process.env
//       .CLOUDINARY_API_SECRET,

// });

// export default cloudinary;
import { v2 as cloudinary }
  from "cloudinary";

cloudinary.config({

  cloud_name:
    "dg3muzlqj",

  api_key:
    "619885472663858",

  api_secret:
    "zJcCzCuUi18n72rjf1iq3_kiPXw",

  secure: true,

});

export default cloudinary;