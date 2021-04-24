var express = require('express');
var faker = require('faker');
var cors = require('cors')
// import { name, internet, helpers, datatype, address } from 'faker';

const app = express()
app.use(cors())
const port = 3010


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
  console.log(req.url);
  let users = []
  faker.seed(50);
  for (let i = 0; i < 10; i++) {
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})