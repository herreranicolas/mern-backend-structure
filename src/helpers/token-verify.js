import jwt from "jsonwebtoken";

const validateJWT = (req, res, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      message: "No token found.",
    });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    req.username = payload.username;
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Invalid token",
    });
  }
  next();
};

export default validateJWT;
