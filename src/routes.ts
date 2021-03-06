import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/accounts/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { ListDeliveriesClientController } from "./modules/clients/useCases/listDeliveries/ListDeliveriesClientController";
import { AddDeliverymancontroller } from "./modules/deliveries/useCases/AddDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/CreateDeliveryController";
import { ListDeliveriesController } from "./modules/deliveries/useCases/ListDeliveriesController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/UpdateEndDateController";
import { CreateDeliverymanController } from "./modules/deliverymen/useCases/CreateDeliverymanController";
import { ListDeliveriesDeliverymanController } from "./modules/deliverymen/useCases/ListDeliveriesDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const listDeliveriesClientController = new ListDeliveriesClientController()

const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const listDeliveriesDeliverymanController = new ListDeliveriesDeliverymanController()

const createDeliveryController = new CreateDeliveryController()
const listDeliveriesController = new ListDeliveriesController()
const addDeliverymanController = new AddDeliverymancontroller()
const updateEndDateController = new UpdateEndDateController()

routes.post("/client", createClientController.handle)
routes.post("/client/authenticate", authenticateClientController.handle)
routes.get("/client/deliveries", ensureAuthenticateClient, listDeliveriesClientController.handle)

routes.post("/deliveryman", createDeliverymanController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, listDeliveriesDeliverymanController.handle)

routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle)
routes.get("/delivery", ensureAuthenticateDeliveryman, listDeliveriesController.handle)
routes.put("/delivery/addDeliveryman/:id", ensureAuthenticateDeliveryman, addDeliverymanController.handle)
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle)


export { routes }