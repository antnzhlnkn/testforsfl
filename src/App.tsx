import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import store from './store';
import { SalaryForm } from './components/containers/CustomForm';

const App = () => (
  <Provider store={store}>
    <SalaryForm />
  </Provider>
);

export default App;
