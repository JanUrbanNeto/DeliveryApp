import { Request, Response } from "express";
import { AddDeliverymanUseCase } from "./AddDeliverymanUseCase";

export class AddDeliverymancontroller {
   async handle(request: Request, response: Response) {
      const { id_deliveryman } = request
      const { id: id_delivery } = request.params

      const addDeliverymanUseCase = new AddDeliverymanUseCase()

      const delivery = await addDeliverymanUseCase.execute({
         id_deliveryman,
         id_delivery
      })

      return response.json(delivery)
   }
}