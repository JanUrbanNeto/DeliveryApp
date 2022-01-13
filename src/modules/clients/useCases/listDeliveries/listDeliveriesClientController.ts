import { prisma } from "../../../../database/prismaClient";

export class ListDeliveriesClient {
   async execute(id_client: string) {
      const deliveries = await prisma.deliveries.findMany({
         where: {
            id_client
         }
      })

      return deliveries;
   }
}