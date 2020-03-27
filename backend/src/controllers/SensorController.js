const connection = require('../database/connection');

module.exports = {
    async index(request,response){

        const { page = 1} = request.query; 

        const [count] = await connection('sensores').count();
        console.log(count);
        
        const sensores = await connection('sensores')
        .join('sensores', 'sensores.id', '=' , 'sensores.id_paciente')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'sensores.*' , 'pacientes.name']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(sensores);
    },

    

    async create(request, response){
        const { name, descricao} = request.body;
        const id_paciente = request.headers.authorization;

       const [id] = await connection('sensores').insert({
            name,
            descricao,
            id_paciente,
        });
        return response.json({ id });
    },
    async delete(request, response){
        const{ id } = request.params;
        const id_paciente = request.headers.authorization;

        const sensor = await connection('sensores')
        .where('id', id)
        .select('id_paciente')
        .first();

        if(sensor.id_paciente!= id_paciente) {
            return response.status(401).json({ error: 'operate not  permitted'});
        }


        await connection('sensores').where('id', id).delete();

        return response.status(204).send();

    }
};