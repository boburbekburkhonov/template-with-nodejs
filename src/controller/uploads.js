import { errorHandlerError } from "../errors/errorHanler.js";
import path from "path";

export const uploadGet = (req, res, next) => {
  res.render("upload.ejs");
};

export const upload = (req, res, next) => {
  const { file } = req.files;

  file.mv(
    path.join(
      process.cwd(),
      "src",
      "uploads",
      Date.now().toString() + path.extname(file.name)
    ),
    (err) => {
      if (err) {
        return next(new errorHandlerError(err.message, 400));
      }

      res.send("OK");
    }
  );
};
