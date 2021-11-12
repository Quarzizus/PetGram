import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { StateContext } from "./context/StateContext";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const authMiddleWare = new ApolloLink((operation, forward) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token} `,
      },
    });
  }
  return forward(operation);
});

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === "invalid_token") {
    sessionStorage.removeItem("token");
    location = "/user";
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    authMiddleWare,
    errorMiddleware,
    new HttpLink({
      uri: "https://glacial-escarpment-87572.herokuapp.com/graphql",
    }),
  ]),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <StateContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StateContext>
  </ApolloProvider>,
  document.getElementById("root")
);
