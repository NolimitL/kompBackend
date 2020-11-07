const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const EVR = require('./environment');
const emailSender = require('./email-sender');
const MongoClient = require('mongodb').MongoClient;
const Mongo = require('mongodb');


const app = express();
const mongoClient = new MongoClient(EVR.DB_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(compression());
app.use(cors({
   origin: 'https://komp-service.herokuapp.com'
}));

(async () => {
   await mongoClient.connect()
            .then(() => console.log('[Connecting is successfully.]'))
            .catch(err => console.log('[ERROR with connecting to DB]:', err))
   app.locals.collection = mongoClient.db('komp-service').collection('comments')
   app.locals.posCollect = mongoClient.db('komp-service').collection('position')
   app.locals.infoServiceCollect = mongoClient.db('komp-service').collection('service-info')
   app.locals.cardViewCollect = mongoClient.db('komp-service').collection('card-view')
   app.locals.phoneCollection = mongoClient.db('komp-service').collection('allowed-phones')
   // https.createServer({
   //    key: fs.readFileSync('./cert/key.pem'),
   //    cert: fs.readFileSync('./cert/cert.pem')
   // }, app).listen(EVR.PORTsec, () => {
   //    console.log(`[Server has been started on port ${EVR.PORTsec} ...]`)
   // })
   app.use(express.static(path.join(__dirname, './dist/frontend-Komp'))).listen(EVR.PORT, () => {
      console.log(`[Server [PROD] has been started on port ${EVR.PORT} ...]`)
   }) 
   // DEV 
   // app.listen(EVR.PORTdev, () => {
   //       console.log(`[Server [DEV] has been started on port ${EVR.PORTdev} ...]`)
   //    })
})()

// receiving all comments
app.get('/api/comments', async (req, res) => {
   const collection = app.locals.collection
   try {
      const commets = await collection.find({"allowed":true}).toArray()
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
      // return req.sendStatus(200)
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
      res.status(200).header()
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
      res.status(200).send(position[0])
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
// restricted Phones
app.post('/api/extra/restrictedphones', async (req, res) => {
   try {
      const phoneColl = app.locals.phoneCollection
      let phone = req.body.phone
      if(phone[0] == "+"){
         phone = phone.slice(2)
      }else if(phone[0] == '8'){
         phone = phone.slice(1)
      }
      let phones = await phoneColl.find({}).toArray()
      phones = Object.values(phones).map(user => {
            if (user.phone[0] == '+') {
               return user.phone.slice(2)
            }else if(user.phone[0] == '8'){
               return user.phone.slice(1)
            }else{
               return user.phone
            }
         })
      if (phones.includes(phone)) {
         res.send({
            permit: true
         })
      }else{
         res.send({
            permit: false
         })
      }
   } catch (err) {
      console.log('[ERROR with receiving a allowed Phones]: ', err)
      res.sendStatus(500)
   }
})

app.get('/api/extra/comments-permit/allowed/:id', async (req, res) => {
   try {
      const commentsColl = app.locals.collection
       await commentsColl.updateOne(
         { _id: Mongo.ObjectID(req.params.id)},
         {
            $set:{
               allowed: true
            }
         }
      ) 
      res.sendFile(__dirname + '/public/confirm.html', err => {
         if (err) {
            return res.sendStatus(500) 
         }
      })
   } catch (err) {
      console.log('[ERROR with receiving a files]: ', err)
      res.sendStatus(500)
   }
})