import { UserService } from "../services/UserService";
import { Request, Response } from "express";

export class UserController {
  constructor(private service: UserService) {
    this.service = service;
  }

  login = async (req: Request, res: Response) => {
    console.log("UserController - Login ");
    await this.service.login();

    res.status(200).json({ message: "User Login Controller" });
  };

  // logout

  // signUp
}
