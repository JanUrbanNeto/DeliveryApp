import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { SECRET_TOKEN_DELIVERYMAN } from "../zSecret";

interface IPayload {
   sub: string
}

export async function ensureAuthenticateDeliveryman(request: Request, response: Response, next: NextFunction) {
   const authHeader = request.headers.authorization;

   if (!authHeader) {
      return response.status(401).json({
         message: "Token missing"
      })
   }

   const [, token ] = authHeader.split(" ")

   try {
      const { sub } = verify(token, SECRET_TOKEN_DELIVERYMAN) as IPayload
      request.id_deliveryman = sub
      return next()
      
   } catch(err) {
      return response.status(401).json({
         message: "Invalid token"
      })
   }   
}