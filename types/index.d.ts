import { getSdk as defaultGqlSdk } from "./default";

declare module "#gql" {
  type GqlSdkFuncs = ReturnType<typeof defaultGqlSdk>;
}
