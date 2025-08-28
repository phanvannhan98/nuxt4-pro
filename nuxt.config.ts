// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["nuxt-graphql-client", "nuxt-graphql-server"],

  typescript: {
    includeWorkspace: true,
  },

  "graphql-client": {
    codegen: false,
  },

  graphqlServer: {
    url: "/api/graphql",
    codegen: {
      // Map your internal enum values to your GraphQL's enums.
      enumValues: "~/graphql/enums/index",

      // Make use of your custom GraphQL Context type and let codegen use it so that the
      // generated resolvers automatically makes use of it.
      contextType: "~/server/graphql/GraphQLContext#GraphQLContext",

      // Change the naming convention of your enum keys
      namingConvention: {
        enumValues: "change-case-all#constantCase",
      },
    },
  },
});
