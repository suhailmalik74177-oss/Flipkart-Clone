import jwt from "jsonwebtoken";

export default function genrateToken(user) {
  const accessToken = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET, // <-- MUST MATCH .env EXACTLY
    { expiresIn: "7d" }
  );

  return {
    accessToken,
    Options: {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  };
}
