import React from 'react';
import App from './ui/app';
import { createRoot } from 'react-dom/client';

import 'normalize.css';
import '@fontsource/bebas-neue';
import '@fontsource/pt-sans';

const root = document.querySelector('#root');
if (!root) {
  throw new Error('Root not found');
}

const container = createRoot(root);
container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
