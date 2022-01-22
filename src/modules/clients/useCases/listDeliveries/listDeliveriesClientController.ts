import { Request, Response } from "express";
import { ListDeliveriesClientUseCase } from "./ListDeliveriesClientUseCase";

export class ListDeliveriesClientController {
   async handle(request: Request, response: Response) {
      const { id_client } = request

      const listDeliveriesClientUseCase = new ListDeliveriesClientUseCase()
      const deliveries = await listDeliveriesClientUseCase.execute(id_client)

      return response.json(deliveries)
   }
}