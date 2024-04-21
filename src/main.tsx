import ReactDOM from 'react-dom/client';
import { Root } from './Root.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Root translationFallbackLabel="Loading translations..." />
);
