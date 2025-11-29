import ProductoRepository from "../repositories/ProductoRepository.js";

const findAll = async (req, res) => {
    const respuesta = await ProductoRepository.findAll();
    return sendResults(respuesta, res, 'No se han encontrado productos.');
};

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await ProductoRepository.findOne(id);
    return sendResults(result, res, 'Producto no encontrado.');
};

const create = async (req, res) => {
    try {
        console.log('📦 Intentando crear producto:', req.body);
        const object = req.body;
        const createdObj = await ProductoRepository.create(object);

        if (!createdObj) {
            console.error('❌ ProductoRepository.create retornó null');
            return res.status(500).json({ message: 'Error al crear el producto.' });
        }

        console.log('✅ Producto creado exitosamente:', createdObj);
        return res.status(201).json(createdObj);
    } catch (error) {
        console.error('❌ Error en ProductoController.create:', error);
        return res.status(500).json({
            message: 'Error al crear el producto.',
            error: error.message
        });
    }
};

const update = async (req, res) => {
    const object = req.body;
    const updatedObj = await ProductoRepository.update(object);
    return sendResults(updatedObj, res, 'Error al actualizar el producto.');
};

const remove = async (req, res) => {
    const id = req.params.id;
    const result = await ProductoRepository.remove(id);
    return sendResults(result, res, 'Error al eliminar el producto.');
};

const sendResults = (result, res, message) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message });
};

const controller = { findAll, findOne, create, update, remove };
export default controller;
