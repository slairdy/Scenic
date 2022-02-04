const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getLocations,
  getLocation
}

function getLocations (db = connection) {
  return db('locations').select()
}

function getLocation (id, db = connection) {
  return db('location').select().where(id, 'id')
}
