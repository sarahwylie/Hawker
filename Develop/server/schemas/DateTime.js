const { GraphQLScalarType, Kind } = require('graphql');

module.exports = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'custom Date scalar type',

    parseValue(value) {
      // convert incoming integer to Date
      return new Date(value);
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10));
      }
      // invalid hard-coded AST string to integer and then to Date
      return null;
    },
    serialize(value) {
      const date = new Date(value);

      return date.toISOString();
    }
  })
};
