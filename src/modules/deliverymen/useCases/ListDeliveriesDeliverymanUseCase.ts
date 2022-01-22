import { prisma } from "../../../database/prismaClient";

export class ListDeliveriesDeliverymanUseCase {
   async execute(id_deliverman: string) {
      const deliveries = await prisma.deliverymen.findMany({
         where: {
            id: id_deliverman
         },
         select: {
            id: true,
            username: true,
            Deliveries: {
               include: {
                  client: {
                     select: {
                        username: true,
                     }
                  }
               }
            }
         },
      })

      return deliveries;
   }
}