const express = require('express')
const request = require('superagent')

const db = require('../db/db')

const router = express.Router()

//API routes - use DB functions in here

router.get('/locations', (req, res) => {
  db.getLocations()
    .then(locations => {
      res.json(locations)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})


router.get('/update-location/:id', (req, res) => {
  const locId = parseInt(req.params.id)
  db.getLocation(locId)
    .then(location => {
      res.json(location)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})


router.post('/update-location/:id', (req, res) => {
  const name = req.body.name
  const descr = req.body.descr
  const lat_long = req.body.lat_long
  const id = req.body.id
  db.updateLocation(name,lat_long,descr,id)
  .then(() => {
    return null
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})

router.post('/create-location', (req, res) => {
  const name = req.body.name
  const descr = req.body.descr
  const lat_long = req.body.lat_long
  db.createLocation(name,lat_long,descr)
  .then((newLoc) => {
    console.log(newLoc)
    return null
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})

router.get('/delete-location/:id', (req, res) => {
  const locId = parseInt(req.params.id)
  db.getLocation(locId)
    .then(location => {
      res.json(location)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})


router.post('/delete-location/:id', (req, res) => {
  const id = req.body.id
  db.deleteLocation(id)
  .then(() => {
    return null
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})


module.exports = router

router.post('/search-results', (req, res) => {
  const searchquery = req.body.searchquery
  const featArr = req.body.featArr
  db.returnSearch(searchquery, featArr)
  .then(locations => {
    res.json(locations)
    return null
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})


router.get('/features', (req, res) => {
  db.getFeatures()
    .then(features => {
      res.json(features)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})


router.get('/features/:id', (req, res) => {
  const locId = parseInt(req.params.id)
  db.getLocFeatures(locId)
    .then(features => {
      res.json(features)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})


router.get('/featured', (req, res) => {
  db.getFeaturedLoc()
    .then(featured_location => {
      res.json(featured_location)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})


router.get('/locations/:id', (req, res) => {
  const locId = parseInt(req.params.id)
  db.getLocation(locId)
    .then(location => {
      res.json(location)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})