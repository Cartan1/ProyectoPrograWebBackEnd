import Categoria from '../models/Categoria.js';
import RepositoryBase from './RepositoryBase.js';

const categoriaRepository = new RepositoryBase(Categoria);

export default categoriaRepository;
