exports.up = function(knex) {
  return knex.schema.createTable('features',(table)=>{
    table.increments('id')
    table.string('name')
    table.string('icon')
    table.boolean('activated')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('features')
};