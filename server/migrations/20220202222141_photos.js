exports.up = function(knex) {
  return knex.schema.createTable('photos',(table)=>{
    table.increments('id')
    table.int('location_id')
    table.string('filepath')
    table.string('descr')
    table.string('credit')
    table.string('credit_url')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('photos')
};