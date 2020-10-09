const express = require('express');
const bodyParser = require('body-parser');
const EVR = require('./environment');
const emailSender = require('./email-sender')
const MongoClient = require('mongodb').MongoClient;
const Mongo = require('mongodb');


const app = express()
const mongoClient = new MongoClient(EVR.DB_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
const jsonParser = bodyParser.json()

app.use(jsonParser);

(async () => {
   await mongoClient.connect()
            .then(() => console.log('[Connecting is successfully.]'))
            .catch(err => console.log('[ERROR with connecting to DB]:', err))
   app.locals.collection = mongoClient.db('komp-service').collection('comments')
   app.locals.posCollect = mongoClient.db('komp-service').collection('position')
   app.locals.infoServiceCollect = mongoClient.db('komp-service').collection('service-info')
   app.locals.cardViewCollect = mongoClient.db('komp-service').collection('card-view')
   app.listen(EVR.PORT, () => {
      console.log(`[Server has been started on port ${EVR.PORT} ...]`)
   })
})()

// receiving all comments
app.get('/api/comments', async (req, res) => {
   const collection = app.locals.collection
   try {
      const commets = await collection.find({"allowed":true}).toArray()
      console.log('Comments:', commets)
      res.send(commets)
   } catch (err) {
      console.log('[ERROR with searching]: ', err)
      res.sendStatus(404)
   }
})

// receiving a comment
app.get('/api/comments/:id', async (req, res) => {
   if (!req.params) {
      return res.sendStatus(204)
   }
   const id = req.params.id 
   const collection = app.locals.collection
   try {
      let mongoID = undefined;
      try {
         mongoID = Mongo.ObjectID(id)
      } catch (err) {
         console.log('[GET-ERROR with incorrect ID]: ', err);
         return res.sendStatus(400)
      }
      const comment = await collection.findOne({'_id': mongoID})
         .catch(err => {
            console.log('[GET-ERROR with incorrected search]: ', err)
            return res.sendStatus(400)
         })
      console.log('One comment:', comment) 
      if (comment === null) {
         res.sendStatus(404)
      }else{
         res.send(comment)
      }
   } catch (err) {
      console.log('[GET-ERROR wrong with search]: ', err)
      return res.sendStatus(400)
   } 
}) 

// addition a comment
app.post('/api/comments', async (req, res) => {
   if (!req.body) {
      return req.sendStatus(204)
   }
   const comment = {
      name: req.body.name,
      phone: req.body.phone,
      text: req.body.text,
      date: req.body.date,
      type: req.body.type,
      allowed: false
   }
   const collection = app.locals.collection
   try {
      const result = await collection.insertOne(comment)
         .catch(err => {
            console.log('[POST-ERROR with adding comment to DB]: ', err)
            res.sendStatus(500)
         })
      await emailSender.sender(result.ops[0])
      res.sendStatus(200)
   } catch (err) {
      console.log('[POST-ERROR]: ', err);
      res.sendStatus(500)
   }
})

// extra source from DB 
// receiving a position
app.get('/api/extra/position', async (req, res) => {
   try {
      const posColl = app.locals.posCollect
      const position = await posColl.find({}).toArray()
      res.status(200).send(position)
   } catch (err) {
      console.log('[ERROR with receiving a list of position]: ', err)
      res.sendStatus(500)
   }
})
// receiving a service-info
app.get('/api/extra/service-info', async (req, res) => {
   try {
      const serviceColl = app.locals.infoServiceCollect
      const info = await serviceColl.find({}).toArray()
      info ? res.send(info) : res.sendStatus(404)
   } catch (err) {
      console.log('[ERROR with receiving a service info]: ', err)
      res.sendStatus(500)
   }
})
//
app.get('/api/extra/card-view', async (req, res) => {
   try {
      const cardColl = app.locals.cardViewCollect
      const cardView = await cardColl.find({}).toArray()
      cardView ? res.send(cardView) : res.sendStatus(404)
   } catch (err) {
      console.log('[ERROR with receiving a card view]: ', err)
      res.sendStatus(500)
   }
})
