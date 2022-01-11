import { prisma } from "../../../database/prismaClient";

export class ListDeliveriesUseCase {
   async execute() {
      const deliveries = await prisma.deliveries.findMany({
         where: {
            ended_at: null
         }
      })
      return deliveries
   }
}