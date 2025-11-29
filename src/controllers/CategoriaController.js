import repository from '../repositories/CategoriaRepository.js';

const findAll = async (req, res) => {
  const data = await repository.findAll();

  if (!data) {
    return res.status(500).json({ message: 'Error al obtener categorías.' });
  }


  const categorias = data.map(cat => ({
    id: cat.id,
    categoria: cat.nombre,
    descripcion: cat.descripcion,
    imagenCat: cat.imagen
  }));

  return res.status(200).json(categorias);
};

const findOne = async (req, res) => {
  const id = req.params.id;
  const cat = await repository.findOne(id);

  if (!cat) {
    return res.status(404).json({ message: 'Categoría no encontrada.' });
  }

  const respuesta = {
    id: cat.id,
    categoria: cat.nombre,
    descripcion: cat.descripcion,
    imagenCat: cat.imagen
  };

  return res.status(200).json(respuesta);
};

const create = async (req, res) => {

  const { categoria, descripcion, imagenCat } = req.body;

  if (!categoria) {
    return res.status(400).json({
      message: 'El campo "categoria" es obligatorio.'
    });
  }

  const creada = await repository.create({
    nombre: categoria,
    descripcion,
    imagen: imagenCat
  });

  if (!creada) {
    return res.status(500).json({ message: 'Error al crear categoría.' });
  }

  const respuesta = {
    id: creada.id,
    categoria: creada.nombre,
    descripcion: creada.descripcion,
    imagenCat: creada.imagen
  };

  return res.status(201).json(respuesta);
};

const update = async (req, res) => {
  const { id, categoria, descripcion, imagenCat } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'Falta el id de la categoría.' });
  }

  const payloadDb = {
    id,
    nombre: categoria,
    descripcion,
    imagen: imagenCat
  };

  const updated = await repository.update(payloadDb);

  if (!updated) {
    return res.status(500).json({ message: 'Error al actualizar categoría.' });
  }

  return res.status(200).json({ message: 'Categoría actualizada correctamente.' });
};

const remove = async (req, res) => {
  const id = req.params.id;
  const deleted = await repository.remove(id);

  if (!deleted) {
    return res.status(500).json({ message: 'Error al eliminar categoría.' });
  }

  return res.status(200).json({ message: 'Categoría eliminada correctamente.' });
};

export default { findAll, findOne, create, update, remove };
