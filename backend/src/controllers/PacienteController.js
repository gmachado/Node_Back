const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const pacientes = await connection('pacientes').select('*');
    
       return response.json(pacientes);
    },
    async create(request, response) {
        const { name } = request.body;
    
    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('pacientes').insert({
        id,
        name,

    })

   

    return response.json({id});
     
   

    }

};