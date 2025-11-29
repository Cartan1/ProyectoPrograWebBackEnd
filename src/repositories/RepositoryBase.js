class RepositoryBase {
    constructor(model) {
        this.model = model;
    }

    async findAll() {
        try {
            return await this.model.findAll();
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async create(entity) {
        try {
            console.log('🔵 RepositoryBase.create - Intentando crear:', entity);
            const result = await this.model.create(entity);
            console.log('🟢 RepositoryBase.create - Éxito:', result.toJSON());
            return result;
        } catch (error) {
            console.error('🔴 RepositoryBase.create - Error completo:', {
                mensaje: error.message,
                nombre: error.name,
                sql: error.sql,
                errores: error.errors
            });
            return null;
        }
    }

    async findOne(id) {
        try {
            return await this.model.findOne({
                where: { id: id }
            });
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async update(entity) {
        try {
            return await this.model.update(entity, {
                where: { id: entity.id }
            });
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async remove(id) {
        try {
            return await this.model.destroy({
                where: { id: id }
            });
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

export default RepositoryBase;
