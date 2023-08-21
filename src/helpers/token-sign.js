import jwt from "jsonwebtoken";

const generateJWT = (username) => {
  return new Promise((resolve, reject) => {
    const payload = { username };

    jwt.sign(
      payload,
      process.env.SECRET_JWT,
      {
        expiresIn: "3h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("Failed to generate token.");
        }
        resolve(token);
      }
    );
  });
};

export default generateJWT;
