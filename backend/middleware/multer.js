import multer from "multer";

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
});
// multer.diskStorage({...})
// Tells multer to store the uploaded files on your local server’s disk.
const upload = multer({ storage: storage })

export default upload