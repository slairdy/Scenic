exports.up = function(knex) {
  return knex.schema.createTable('locations',(table)=>{
    table.increments('id')
    table.string('name')
    table.string('lat_long')
    table.string('descr')
    table.int('owner_id')
    table.boolean('admin_entry')
    table.boolean('activated')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('locations')
};