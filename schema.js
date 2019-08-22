const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql');

const greetings = {
  hello: {
    language: {
      en: 'hello',
      sp: 'hola',
      ua: 'привіт'
    }
  },
  hey: {
    language: {
      en: 'hey',
      sp: 'ey',
      ua: 'йоу'
    }
  }
};

const GreetingType = new GraphQLObjectType({
  name: 'Greeting',
  description: 'greeting',

  fields: () => ({
    phrase: {
      type: GraphQLString,
      args: {
        phrase: { type: GraphQLString }
      },
      resolve: (source, args) => {
        return greetings[args.phrase].language['en'];
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'the entry point',

    fields: () => ({
      greeting: {
        type: GreetingType,
        resolve: () => "zzzz"
      },
    })
  })
});