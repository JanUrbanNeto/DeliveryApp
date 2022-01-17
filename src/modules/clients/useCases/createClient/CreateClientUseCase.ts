import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";
import { NUMBER_OF_SALTS } from "../../../../zSecret";

interface ICreateClient {
   username: string;
   password: string;
}

export class CreateClientUseCase {
   async execute({ password, username }: ICreateClient) {
      const clientExist = await prisma.clients.findFirst({
         where: {
            username
         }
      })

      if(clientExist){
         throw new Error("Client already exists")
      }

      const hashPassword = await hash(password, NUMBER_OF_SALTS);

      const client = await prisma.clients.create({
         data: {
            username,
            password: hashPassword
         }
      });

      return client;
   }
}