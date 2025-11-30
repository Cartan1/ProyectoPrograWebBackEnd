// routes/itemcarrito.routes.js
import express from "express";
import controller from "../controllers/ItemDeCarritoController.js";

const router = express.Router();

router.get("/", controller.findAll);
router.get("/carrito/:idcarrito", controller.findByCarrito);
router.get("/:id", controller.findOne);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/carrito/:idcarrito", controller.removeByCarrito);
router.delete("/:id", controller.remove);

export default router;
