import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient"
import { SECRET_TOKEN } from "../../../zSecret";

interface IAuthenticateClient {
   username: string;
   password: string;
}

export class AuthenticateClientUseCase {
   async execute({ username, password }: IAuthenticateClient) {
      const client = await prisma.clients.findFirst({
         where: {
            username
         }
      });

      if (!client) {
         throw new Error("invalid username or password!")
      }

      const passwordMatch = await compare(password, client.password);

      if (!passwordMatch) {
         throw new Error("invalid username or password!")
      }

      const token = await sign({ username }, SECRET_TOKEN, {
         subject: client.id,
         expiresIn: "100d"
      })

      return token;
   }
}