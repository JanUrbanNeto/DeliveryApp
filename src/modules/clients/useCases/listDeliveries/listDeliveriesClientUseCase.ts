import { prisma } from "../../../../database/prismaClient";

export class ListDeliveriesClientUseCase {
   async execute(id_client: string) {
      const deliveries = await prisma.clients.findMany({
         where: {
            id: id_client
         },
         select: {
            id: true,
            username: true,
            Deliveries: true
         }
      })

      return deliveries;
   }
}