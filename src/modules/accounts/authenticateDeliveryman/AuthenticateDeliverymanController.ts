import { Request, Response } from "express";
import { AuthenticateDelivermanUseCase } from "./AuthenticateDeliverymanUseCase";

export class AuthenticateDeliverymanController {
   async handle(request: Request, response: Response) {

      const { username, password } = request.body

      const authenticateDelivermanUseCase = new AuthenticateDelivermanUseCase()

      const result = await authenticateDelivermanUseCase.execute({
         username,
         password
      })

      return response.json(result)
   }
}