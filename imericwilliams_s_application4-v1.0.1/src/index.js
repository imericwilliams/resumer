import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
  <Auth0Provider
    domain="dev-1f2z6yb6l0m5mdjp.us.auth0.com"
    clientId="jQcpxube46AWfKFSwprU553ynQuHmfbp"
    authorizationParams={{
      // The URL to where you'd like to redirect your users after they authenticate with Auth0
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
