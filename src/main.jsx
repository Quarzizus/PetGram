import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { StateContext } from "./context/StateContext";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://glacial-escarpment-87572.herokuapp.com/graphql",
  cache: new InMemoryCache(),
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
