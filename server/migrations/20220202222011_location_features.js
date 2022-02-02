exports.up = function(knex) {
  return knex.schema.createTable('location_features',(table)=>{
    table.increments('id')
    table.int('feature_id')
    table.int('location_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('location_features')
};