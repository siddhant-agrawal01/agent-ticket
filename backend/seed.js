import User from "./models/user.js";
import bcrypt from "bcrypt";

const seedAdmin = async () => {
  const email = "admin@example.com";
  const password = "password";

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashed, role: "admin" });
  console.log("Admin created");
};
