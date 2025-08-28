import { Resolvers } from "#graphql/resolver";
import { typeDefs } from "#graphql/schema";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateH3Handler } from "@as-integrations/h3";

const resolvers: Resolvers = {
  Query: {
    locations: () => {
      return {
        results: [
          { id: "1", name: "Earth (C-137)" },
          { id: "2", name: "Abadango" },
        ],
      };
    },
    posts: () => {
      return [
        {
          id: "1",
          title: "First Post",
          content: "This is the content of the first post.",
          description: "This is the description of the first post.",
        },
        {
          id: "2",
          title: "Second Post",
          content: "This is the content of the second post.",
          description: "This is the description of the second post.",
        },
      ];
    },
  },
};

const apollo = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateH3Handler(apollo);
