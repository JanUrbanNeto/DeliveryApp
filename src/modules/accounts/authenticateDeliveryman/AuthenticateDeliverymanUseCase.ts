import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";
import { SECRET_TOKEN_DELIVERYMAN } from "../../../zSecret";

interface IAuthenticaticateDeliveryman {
   username: string;
   password: string;
}

export class AuthenticateDelivermanUseCase {
   async execute({ username, password }: IAuthenticaticateDeliveryman) {
      const deliveryman = await prisma.deliverymen.findFirst({
         where: {
            username
         }
      })

      if(!deliveryman) {
         throw new Error("invalid username or password")
      }

      const passwordMatch = await compare(password, deliveryman.password)

      if(!passwordMatch) {
         throw new Error("invalid username or password")
      }

      const token = await sign({ username }, SECRET_TOKEN_DELIVERYMAN, {
         subject: deliveryman.id,
         expiresIn: "100d"
      })

      return token;
   }
}