import jwt from "jsonwebtoken";

//doctor authentication middleware
const authDoctor = async (req, res, next) => {
  try {
    // const { token } = req.headers;
    const dToken = req.headers.dtoken;
    if (!dToken) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    // const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
    const token_decode = jwt.verify(dToken, process.env.JWT_SECRET);

    req.docId = token_decode.id;
    next();
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export default authDoctor;
