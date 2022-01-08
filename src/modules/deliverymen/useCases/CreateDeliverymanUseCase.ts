import { hash } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { NUMBER_OF_SALTS } from "../../../zSecret";

interface ICreateDeliveryman {
   username: string;
   password: string;
}

export class CreateDeliverymanUseCase {
   async execute({ password, username }: ICreateDeliveryman) {
      const deliverymanExist = await prisma.deliverymen.findFirst({
         where: {
            username: {
               mode: "insensitive"
            }
         }
      })

      if(deliverymanExist){
         throw new Error("Deliveryman already exists")
      }

      const hashPassword = await hash(password, NUMBER_OF_SALTS);

      const deliveryman = await prisma.deliverymen.create({
         data: {
            username,
            password: hashPassword
         }
      });

      return deliveryman;
   }
}