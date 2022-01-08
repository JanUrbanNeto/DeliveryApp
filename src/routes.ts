import { Router } from "express";
import { AuthenticateClientController } from "./modules/accounts/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliverymen/useCases/CreateDeliverymanController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController()
const createClientController = new CreateClientController()
const createDeliverymanController = new CreateDeliverymanController()

routes.post("/authenticate", authenticateClientController.handle)
routes.post("/clients", createClientController.handle)
routes.post("/deliveryman", createDeliverymanController.handle)

export { routes }