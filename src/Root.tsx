import "./index.scss";
import "@/styles/react-tabs.scss";
import "./i18n.ts";
import "@fontsource/pixelify-sans";

import { Provider } from "jotai";
import React, { Suspense } from "react";
import { store } from "./atoms/store";
import App from "./App";

interface RootProps {
  translationFallbackLabel: string;
}

function Root({ translationFallbackLabel }: RootProps) {
  return (
    <React.StrictMode>
      <Suspense fallback={<div>{translationFallbackLabel}</div>}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </React.StrictMode>
  );
}

export { Root };
