exports.up = function(knex) {
  return knex.schema.createTable('featured_location',(table)=>{
    table.increments('id')
    table.int('location_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('featured_location')
};