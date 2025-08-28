import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type LocationsResponse = {
  __typename?: 'LocationsResponse';
  results: Array<Location>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  locations?: Maybe<LocationsResponse>;
  posts: Array<Post>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['String']['output']>;
};

export type LocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type LocationsQuery = { __typename?: 'Query', locations?: { __typename?: 'LocationsResponse', results: Array<{ __typename?: 'Location', id: string, name: string }> } | null };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, title: string, content: string, description: string }> };


export const LocationsDocument = gql`
    query locations {
  locations {
    results {
      id
      name
    }
  }
}
    `;
export const PostsDocument = gql`
    query posts {
  posts {
    id
    title
    content
    description
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    locations(variables?: LocationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<LocationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LocationsQuery>({ document: LocationsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'locations', 'query', variables);
    },
    posts(variables?: PostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostsQuery>({ document: PostsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'posts', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;