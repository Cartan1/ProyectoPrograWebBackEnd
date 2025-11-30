import repository from "../repositories/CarritoDeCompraRepository.js";

const findAll = async (req, res) => {
    try {
        const data = await repository.findAll();
        return ok(res, data);
    } catch {
        return error(res, "Error obteniendo carritos");
    }
};

const findOne = async (req, res) => {
    try {
        const data = await repository.findOne(req.params.id);
        return ok(res, data);
    } catch {
        return error(res, "Carrito no encontrado");
    }
};

const findByUsuario = async (req, res) => {
  try {
    const data = await repository.findByUsuario(req.params.idusuario);
    return ok(res, data);
  } catch {
    return error(res, "Error interno");
  }
};

const create = async (req, res) => {
    try {
        const data = await repository.create(req.body);
        return ok(res, data);
    } catch {
        return error(res, "Error al crear carrito");
    }
};

const update = async (req, res) => {
    try {
        const data = await repository.update(req.body);
        return ok(res, data);
    } catch {
        return error(res, "Error al actualizar carrito");
    }
};

const remove = async (req, res) => {
    try {
        const data = await repository.remove(req.params.id);
        return ok(res, data);
    } catch {
        return error(res, "Error al eliminar carrito");
    }
};

const ok = (res, data) => res.status(200).json({ success: true, data });
const error = (res, message) => res.status(400).json({ success: false, message });

export default { findAll, findOne, findByUsuario, create, update, remove };
