import { prisma } from "../../../database/prismaClient";

interface IAddDeliveryman {
   id_delivery: string;
   id_deliveryman: string;
}

export class AddDeliverymanUseCase {
   async execute({ id_delivery, id_deliveryman }: IAddDeliveryman) {
      const delivery = await prisma.deliveries.update({
         where: {
            id: id_delivery,
         },
         data: {
            id_deliveryman,
         }
      })

      return delivery
   }
}