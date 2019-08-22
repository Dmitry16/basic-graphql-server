let express = require('express');
let graphqlHTTP = require('express-graphql');
let schema = require('./schema');

let app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));