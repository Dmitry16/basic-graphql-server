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
      resolve: (source, args, context) => {
        return greetings[args.phrase].language['en'];
      }
    },
    language: {
      type: GraphQLString,
      args: {
        lang: { type: GraphQLString }
      },
      resolve: (source, args) => {
        return args.lang;
      }
    },
    translation: {
      type: GraphQLString,
      args: {
        phrase: { type: GraphQLString },
        lang: { type: GraphQLString }
      },
      resolve: (source, args) => {
        return greetings[args.phrase].language[args.lang];
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