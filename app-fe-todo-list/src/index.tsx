import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodosPage } from './pages/todos-page/todos-page';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodosPage />
    </Provider>
  </React.StrictMode>
);
