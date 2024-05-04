import ReactDOM from "react-dom/client";
import { Root } from "./Root.tsx";
import { i18n } from "./i18n";

void i18n.changeLanguage("ja");

window.history.replaceState(null, "", "/");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Root translationFallbackLabel="翻訳を読み込んでいます…" />,
);
