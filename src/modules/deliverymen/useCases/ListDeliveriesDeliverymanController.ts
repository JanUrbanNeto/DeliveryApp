import { Request, Response } from "express";
import { ListDeliveriesDeliverymanUseCase } from "./ListDeliveriesDeliverymanUseCase";

export class ListDeliveriesDeliverymanController {
   async handle(request: Request, response: Response) {
      const { id_deliveryman } = request

      const listDeliveriesDeliverymanUseCase = new ListDeliveriesDeliverymanUseCase()
      const deliveries = await listDeliveriesDeliverymanUseCase.execute(id_deliveryman)

      return response.json(deliveries)
   }
}