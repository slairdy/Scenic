import request from 'superagent'

export function getLocations () {
  return request.get('/v1/locations')
    .then(res => {
      return res.body
    })
    .catch()
}

export function getSearchResults (searchquery) {
  return request.post('/v1/search-results')
    .send({
      searchquery:searchquery
    })
    .then(res => {
      return res.body
    })
    .catch()
}

export function getFeatLocation () {
  return request.get('/v1/featured')
    .then(res => {
      return res.body
    })
    .catch()
}

export function getFeatures () {
  return request.get('/v1/features')
    .then(res => {
      return res.body
    })
    .catch()
}

export function getLocFeatures (id) {
  return request.get('/v1/features/'+id)
    .then(res => {
      return res.body
    })
    .catch()
}

export function getLocation (id) {
  return request.get('/v1/locations/'+id)
    .then(res => {
      return res.body
    })
    .catch()
}