const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;


        const sensor = await connection('sensores')
         .where('id', id)
         .select('name')
         .first();

        if(!sensor){
            return response.status(400).json({ error: 'No Sensor found with this ID' });
        }

        return response.json(sensor);

        
    }
}