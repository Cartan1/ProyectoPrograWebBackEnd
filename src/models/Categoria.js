import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';

const Categoria = sequelize.define('categoria', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  imagen: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'categoria'
});

export default Categoria;
