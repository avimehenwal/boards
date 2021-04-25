var express = require('express');
var faker = require('faker');
var cors = require('cors')
const redis = require('redis')
const { promisify } = require("util");
const bodyParser = require("body-parser");
// import { name, internet, helpers, datatype, address } from 'faker';

const app = express()
app.use(cors())
app.use(bodyParser.json()) // for parsing application/json
const port = process.env.PORT || 3010
const REDIS_PORT = process.env.REDIS_PORT || 6379
const client = redis.createClient(REDIS_PORT)
const getAsync = promisify(client.get).bind(client);

// getAsync.then(console.log).catch(console.error);

// server log format
// express.logger.format('mydate', function () {
//   var df = require('console-stamp/node_modules/dateformat');
//   return df(new Date(), 'HH:MM:ss.l');
// });
// app.use(express.logger('[:mydate] :method :url :status :res[content-length] - :remote-addr - :response-time ms'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
  console.log(req.url);
  let limit = 10
  if (req.query != {}) { limit = req.query.limit }
  let users = []
  faker.seed(50);
  for (let i = 0; i < limit; i++) {
    const newUser = {
      id: faker.datatype.number(),
      name: faker.name.findName(),
      text: faker.lorem.text(),
      city: faker.address.city(),
      avatar: faker.image.avatar()
    }
    users.push(newUser)
  }
  res.json({ users })
})

// with real DB get the family record
app.get('/user/:userId', (req, res) => {
  console.log('req.url');
  const user = {
    id: req.params.userId,
    name: faker.name.findName(),
    text: faker.lorem.text(),
    city: faker.address.city(),
    avatar: faker.image.avatar()
  }
  res.json(user)
})

let initialItems = [
  {
    "status": "unseen",
    "id": "2",
    "name": "Marvin Blanda",
    "city": "East Zena",
    "text": "est qui voluptatem",
    "avatar": "https://cdn.fakercloud.com/avatars/victorstuber_128.jpg"
  },
  {
    "status": "approved",
    "id": "1",
    "name": "Leticia Frami",
    "city": "South Justinemouth",
    "text": "Odio ut dolores aliquid mollitia. Reiciendis aut sunt voluptates. Natus labore ipsam sint necessitatibus. Tempore voluptatem reprehenderit.",
    "avatar": "https://cdn.fakercloud.com/avatars/fjaguero_128.jpg"
  },
  {
    "status": "declined",
    "id": "3",
    "name": "Seth Ondricka",
    "city": "Maestad",
    "text": "Porro sint adipisci magnam voluptatem soluta quasi delectus aut tempora. Porro mollitia quibusdam sed itaque porro at.",
    "avatar": "https://cdn.fakercloud.com/avatars/tgerken_128.jpg"
  },
  // test transitions
  {
    // "status": "unseen",
    "status": "declined",
    // "status": "approved",

    "id": "4",
    "name": "Stuart Beier",
    "text": "Ut omnis corrupti in et.",
    "city": "Tulare",
    "avatar": "https://cdn.fakercloud.com/avatars/dhrubo_128.jpg"
  }
]

initialItems.map(item => {
  client.set(item.id, JSON.stringify(item), redis.print);
})

async function getFromStore(id) {
  let result = await getAsync(id)
  return JSON.parse(result)
}

app.get('/boardapp', async (req, res) => {
  console.log(req.url);
  const validkeys = [1, 2, 3, 4]
  const promises = validkeys.map(async id => {
    let value = await getFromStore(id.toString())
    return value
  })

  const results = await Promise.all(promises)
  console.log(results.length)
  res.json(results)
})

app.get('/boardapp/:userId', async (req, res) => {
  console.log('req.url');
  const data = await getFromStore(req.params.userId)
  console.dir(data)
  res.json(data)
})

app.post('/boardapp/:userId', async (req, res) => {
  console.log(req.url);
  let error = {
    httpStatus: 404,
    type: 'error',
    msg: 'some useful message'
  }
  if (req.body.status) {
    const validStatusValues = ['approved', 'unseen', 'declined']
    var newStatus = req.body.status;
    if (newStatus in validStatusValues) {
      const data = await getFromStore(req.params.userId)
      data['status'] = newStatus
      const transaction = await client.set(req.params.userId, JSON.stringify(data), redis.print);
      const verifyTransaction = await getFromStore(req.params.userId)
      console.dir(transaction, verifyTransaction)
      res.json(verifyTransaction)
    } else {
      error['msg'] = 'Not a valid status value. Use from ' + validStatusValues.join(', ')
      res.status(404).json(error)
    }
  } else {
    error['msg'] = 'status key is required in POST body'
    res.status(404).json(error)
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})