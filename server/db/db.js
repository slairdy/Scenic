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
  returnSearch,
  updateLocation,
  deleteLocation,
  createLocation,
  createPhoto
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

//update
function updateLocation(name,lat_long,descr,id,db = connection){
  return db('locations')
  .update({
    name: name,
    lat_long:lat_long,
    descr:descr
  })
  .where('id', id)
}

//delete
function deleteLocation(id,db = connection){
  return db('locations')
  .select()
  .where('id', id)
  .del()
}

//create
function createLocation(name,lat_long,descr,id,db = connection){
  return db('locations')
  .insert({
    name: name,
    lat_long:lat_long,
    descr:descr
  })
}

//new photo
function createPhoto(id,db = connection){
  return db('photos')
  .insert({
    location_id: id,
    filepath:'muriwai_1.png',
    descr:'photo description'
  })
}