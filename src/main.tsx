import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import '@/styles/react-tabs.scss';
import './i18n.ts';
import '@fontsource/noto-color-emoji';
import '@fontsource/pixelify-sans';
import { Provider } from 'jotai';
import { solverStore } from './solver-bridge/solverBridge.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading translations...</div>}>
      <Provider store={solverStore}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
