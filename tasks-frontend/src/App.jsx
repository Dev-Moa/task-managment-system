import React from "react";
import RouteComponent from "./components/Routes/RouteComponent";
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

const App = () => (
  <AuthProvider store={store}>
    <RouteComponent/>
  </AuthProvider>
);

export default App;
