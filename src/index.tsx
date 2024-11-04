import ReactDOM from 'react-dom/client';
import App from 'App/App';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { Provider } from 'react-redux';
import store from 'store/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter basename="/lr_studio_dashboard_manager">
      <App />
    </BrowserRouter>
  </Provider>
);
