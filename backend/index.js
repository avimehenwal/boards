var express = require('express');
var faker = require('faker');
var cors = require('cors')
const redis = require('redis')
const { promisify } = require("util");
// import { name, internet, helpers, datatype, address } from 'faker';

const app = express()
app.use(cors())
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
    "id": "23",
    "name": "Marvin Blanda",
    "city": "East Zena",
    "text": "est qui voluptatem",
    "avatar": "https://cdn.fakercloud.com/avatars/victorstuber_128.jpg"
  },
  {
    "status": "approved",
    "id": "23245",
    "name": "Leticia Frami",
    "city": "South Justinemouth",
    "text": "Odio ut dolores aliquid mollitia. Reiciendis aut sunt voluptates. Natus labore ipsam sint necessitatibus. Tempore voluptatem reprehenderit.",
    "avatar": "https://cdn.fakercloud.com/avatars/fjaguero_128.jpg"
  },
  {
    "status": "declined",
    "id": "333",
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

    "id": "4950",
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
  // console.log(typeof result);
  return JSON.parse(result)
}

app.get('/boardapp', (req, res) => {
  console.log(req.url);
  res.json(items)
})

app.get('/boardapp/:userId', async (req, res) => {
  console.log('req.url');
  const oldData = await getFromStore(23)
  console.dir(oldData)
  res.json(oldData)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})