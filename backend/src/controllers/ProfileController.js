const connection = require('../database/connection');
module.exports = {
    async index(request, response){
        const id_paciente = request.headers.authorization;

        const sensores = await connection('sensores')
        .where('id_paciente', id_paciente)
        .select('*');

    return response.json(sensores);
    }
}