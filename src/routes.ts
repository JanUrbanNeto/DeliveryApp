import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/accounts/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { AddDeliverymancontroller } from "./modules/deliveries/useCases/AddDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/CreateDeliveryController";
import { ListDeliveriesController } from "./modules/deliveries/useCases/ListDeliveriesController";
import { CreateDeliverymanController } from "./modules/deliverymen/useCases/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

const createDeliveryController = new CreateDeliveryController()
const listDeliveriesController = new ListDeliveriesController()
const addDeliverymanController = new AddDeliverymancontroller()

routes.post("/client", createClientController.handle)
routes.post("/client/authenticate", authenticateClientController.handle)

routes.post("/deliveryman", createDeliverymanController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)

routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle)
routes.get("/delivery", ensureAuthenticateDeliveryman, listDeliveriesController.handle)
routes.put("/delivery/addDeliveryman/:id", ensureAuthenticateDeliveryman, addDeliverymanController.handle)

export { routes }