/*samantha:
import repository from "../repositories/UsuarioRepository.js";

const findAll = async (req, res) => {
    const respuesta = await repository.findAll();
    return sendResults(respuesta, res, "No se han encontrado usuarios.");
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await repository.findOne(id);
    return sendResults(result, res, "Usuario no encontrado.");
}

const create = async (req, res) => {
    const object = req.body;
    const createdObj = await repository.create(object);
    return sendResults(createdObj, res, "Error al crear el usuario.");
}

const update = async (req, res) => {
    const object = req.body;
    const updatedObj = await repository.update(object);
    return sendResults(updatedObj, res, "Error al actualizar usuario.");
}


const remove = async (req, res) => {
    const id = req.params.id;
    const result = await repository.remove(id);
    return sendResults(result, res, "Error al eliminar el usuario.");
}

const sendResults = (result, res, message) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message });
}

export default { findAll, findOne, create, update, remove };
*/

import repository from '../repositories/UsuarioRepository.js';

const findAll = async (req, res) => {
  const respuesta = await repository.findAll();
  return sendResults(respuesta, res, 'No se han encontrado usuarios.');
};

const findOne = async (req, res) => {
  const id = req.params.id;
  const result = await repository.findOne(id);
  return sendResults(result, res, 'Usuario no encontrado.');
};

const create = async (req, res) => {
  const object = req.body;
  const createdObj = await repository.create(object);
  return sendResults(createdObj, res, 'Error al crear el usuario.');
};

const update = async (req, res) => {
  const object = req.body;
  const updatedObj = await repository.update(object);
  return sendResults(updatedObj, res, 'Error al actualizar usuario.');
};

const remove = async (req, res) => {
  const id = req.params.id;
  const result = await repository.remove(id);
  return sendResults(result, res, 'Error al eliminar el usuario.');
};

// Cambiar contraseña (usuario registrado)
const changePassword = async (req, res) => {
  const id = req.params.id;
  const { passwordActual, passwordNueva } = req.body;

  if (!passwordActual || !passwordNueva) {
    return res.status(400).json({
      message: 'Debe enviar passwordActual y passwordNueva.'
    });
  }

  const user = await repository.findOne(id);

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado.' });
  }

  // OJO: aquí se está comparando en texto plano.
  // Si usamos bcrypt, solo cambias esta parte.
  if (user.password !== passwordActual) {
    return res.status(400).json({ message: 'Contraseña actual incorrecta.' });
  }

  const payload = {
    ...user.dataValues,
    password: passwordNueva
  };

  const updated = await repository.update(payload);

  if (!updated) {
    return res.status(500).json({ message: 'Error al actualizar contraseña.' });
  }

  return res.status(200).json({ message: 'Contraseña actualizada correctamente.' });
};

const sendResults = (result, res, message) => {
  if (result)
    return res.status(200).json(result);
  else
    return res.status(500).json({ message });
};

export default { findAll, findOne, create, update, remove, changePassword };
