
import React from 'react';
// Support both React 18 and legacy React versions.
// If 'react-dom/client' is missing, fall back to 'react-dom' and shim createRoot.
let ReactDOM: any;
try {
    // @ts-ignore
    ReactDOM = require('react-dom/client');
} catch {
    // @ts-ignore
    ReactDOM = require('react-dom');
    if (!ReactDOM.createRoot) {
        ReactDOM.createRoot = (container: Element) => ({
            render: (el: any) => ReactDOM.render(el, container),
        });
    }
}
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
