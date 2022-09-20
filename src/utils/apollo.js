import { ApolloClient, InMemoryCache } from "@apollo/client";

export const Client = new ApolloClient({
  uri: "https://flyby-gateway.herokuapp.com/",
  cache: new InMemoryCache(),
});
