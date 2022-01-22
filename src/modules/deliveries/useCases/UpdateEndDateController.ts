import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
   async handle(request: Request, response: Response) {
      const { id_deliveryman } = request
      const { id: id_delivery } = request.params

      const updateEndDateUseCase = new UpdateEndDateUseCase()

      console.log("delivery: " + id_delivery + "\nDeliveryman: " + id_deliveryman)

      const result = await updateEndDateUseCase.execute({
         id_delivery,
         id_deliveryman
      })

      return response.json(result)
   }
}