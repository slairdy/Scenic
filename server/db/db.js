const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getLocations,
  getLocation,
  getFeaturedLoc,
  getLocFeatures,
  getFeature,
  getFeatures,
  returnSearch
}

//DB functions go here

//location stuff
function getLocations (db = connection) {
  return db('locations').select()
}

function getLocation (id, db = connection) {
  return db('locations').select().where('id', id).first()
}

//featured Location
function getFeaturedLoc(db = connection){
  return db('featured_location')
  .join('locations','locations.id','featured_location.location_id')
  .select('locations.id as id','name','featured_location.id as f_id','lat_long','descr').first()
}


//features
function getLocFeatures (id, db = connection) {
  return db('location_features')
  .join('features','location_features.feature_id','features.id')
  .select('location_features.id as lf_id','features.id as f_id','name','icon','location_features.location_id as l_id')
  .where('location_id', id)

}

function getFeatures (id, db = connection) {
  return db('features').select()
}

function getFeature (id, db = connection) {
  return db('features').select().where('id', id).first()
}

  //search
function returnSearch(searchquery,db = connection){
  return db('locations')
  .select()
  .where('name', 'like', `%${searchquery || ''}%`)
  .orWhere('descr', 'like', `%${searchquery || ''}%`)
}

//search filter
// function filterSearch(locId,featArr,db = connection){
//   return db('location_features')
//   .select('*')
//   .whereIn('location_features.feature_id', featArr)
//   .where('location_features.location_id', locId)
// }

//SELECT * FROM 'location_features' WHERE feature_id IN (5,2) AND location_id = 1
  
  