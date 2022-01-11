import { Request, Response } from "express";
import { ListDeliveriesUseCase } from "./ListDeliveriesUseCase";

export class ListDeliveriesController {
   async handle(request: Request, response:Response) {
      const listDeliveriesUseCase = new ListDeliveriesUseCase()

      const result = await listDeliveriesUseCase.execute()

      return response.json(result)
   }
}