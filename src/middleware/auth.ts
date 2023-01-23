import { NextFunction, Request, Response } from "express";

export const authenticate = (_: Request, res: Response, next: NextFunction) => {
  try {
    // console.log(req.headers)
    //**Enter global authentication logic here*/
    return next()
  } catch (err) {
    return res.status(403).send({ message: "Forbidden" })
  }
}