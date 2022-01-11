import { Router } from "express";
import { AuthenticateClientController } from "./modules/accounts/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/CreateDeliveryController";
import { CreateDeliverymanController } from "./modules/deliverymen/useCases/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

const createDeliveryController = new CreateDeliveryController()

routes.post("/client", createClientController.handle)
routes.post("/client/authenticate", authenticateClientController.handle)

routes.post("/deliveryman", createDeliverymanController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)

routes.post("/delivery", createDeliveryController.handle)

export { routes }