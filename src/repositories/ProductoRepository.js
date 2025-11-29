import Producto from "../models/Producto.js";
import RepositoryBase from "./RepositoryBase.js";

const ProductoRepository = new RepositoryBase(Producto);

export default ProductoRepository;
