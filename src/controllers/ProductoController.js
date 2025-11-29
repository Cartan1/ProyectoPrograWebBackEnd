import ProductoRepository from "../repositories/ProductoRepository.js";

const findAll = async (req, res) => {
    try {
        const respuesta = await ProductoRepository.findAll();
        return sendResults(respuesta, res, 'No se han encontrado productos.');
    } catch (error) {
        return sendError(error, res);
    }
};

const findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await ProductoRepository.findOne(id);
        return sendResults(result, res, 'Producto no encontrado.');
    } catch (error) {
        return sendError(error, res);
    }
};

const create = async (req, res) => {
    try {
        console.log('📦 Intentando crear producto:', req.body);

        const createdObj = await ProductoRepository.create(req.body);

        return res.status(201).json(createdObj);
    } catch (error) {
        return sendError(error, res);
    }
};

const update = async (req, res) => {
    try {
        const updatedObj = await ProductoRepository.update(req.body);
        return sendResults(updatedObj, res, 'Error al actualizar el producto.');
    } catch (error) {
        return sendError(error, res);
    }
};

const remove = async (req, res) => {
    try {
        const deleted = await ProductoRepository.remove(req.params.id);
        return sendResults(deleted, res, 'Error al eliminar producto.');
    } catch (error) {
        return sendError(error, res);
    }
};

const sendResults = (result, res, message) => {
    if (result) return res.status(200).json(result);
    return res.status(404).json({ message });
};

const sendError = (error, res) => {
    console.error("❌ Error en ProductoController:", error);
    return res.status(500).json({ message: "Error interno en servidor.", error: error.message });
};

export default { findAll, findOne, create, update, remove };
