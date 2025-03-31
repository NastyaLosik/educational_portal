import { UserModel } from "../models/user";
import jwt from "jsonwebtoken";

const registerUser = async (username: string, password: string) => {
  const existingUser = await UserModel.findOne({ username });
  if (existingUser) {
    throw new Error("Пользователь уже существует");
  }
  const user = new UserModel({ username, password });
  await user.save();
  return user;
};

const loginUser = async (username: string, password: string) => {
  const user = await UserModel.findOne({ username });
  if (!user) {
    throw new Error("Пользователь не найден");
  }
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new Error("Неверный пароль");
  }
  return user;
};

const generateToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "1h" });
};

export const authService = {
  registerUser,
  generateToken,
  loginUser,
};
