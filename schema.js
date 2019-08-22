const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql');

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'blablabla',

    fields: () => ({
      hello: {
        type: GraphQLString,
        resolve: () => 'Hello Worldzzz!'
      },
      blabla: {
        type: GraphQLString,
        resolve: () => 'blablablabla!!!'
      }
    })
  })
});