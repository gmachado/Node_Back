
exports.up = function(knex) {
    return knex.schema.createTable('sensores', function (table){
        table.increments();

        table.string('name').notNullable();
        table.string('descricao').notNullable();

        table.string('id_paciente').notNullable();

        table.foreign('id_paciente').references('id').inTable('pacientes');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('sensores');
  
};
