import multer from "multer";
const Storage = multer.memoryStorage();
export const singleUpload = multer({ Storage }).single("file");
