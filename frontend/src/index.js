// import reportWebVitals from './reportWebVitals';
import React from 'react';
import {createRoot} from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import csrfFetch, { restoreCSRF } from './store/csrf';
import { restoreSession } from './store/session';
import * as sessionActions from './store/session';
import * as userActions from './store/users';
import * as shopActions from './store/shops';

const root = createRoot(document.getElementById('root'));
const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.userActions = userActions;
  window.shopActions = shopActions;
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

const renderApp = () => {
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );

}

// restoreSession();

if (sessionStorage.getItem('X-CSRF-Token') === null) {
  restoreCSRF().then(renderApp);
} else {
  renderApp();
}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
