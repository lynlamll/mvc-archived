// import express from "express";
// import { userController, contactController } from "./server";
// import { isLoggedIn } from "./guards";

// export const routes = express.Router();

// user related route handler
// routes.post("/login", userController.login);
// routes.get("/logout", userController.logout);
// routes.post("/signUp", userController.signUp);

// contact related route handler, guarded by isLoggedIn middleware
// routes.get("/contact", isLoggedIn, contactController.getAllContact);
// routes.post("/contact", isLoggedIn, contactController.addContact);

// -- Bonus --
// routes.get("/contact/:id", isLoggedIn, contactController.getContactById);
// routes.delete("/contact/:id", isLoggedIn, contactController.deleteContactById);
