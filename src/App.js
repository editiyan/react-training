import './App.css';
import './styles.css';
import StatefullExample from './day1-practice/components/beforeHooks/statefull';
import FetchDataHooks from './day1-practice/FetchHooks';
import CounterApp from './day1-practice/counterApp';
import CounterHooks from './day1-practice/Hooks/CounterHooks';
import TransferApp from './day2-practice/components';
import RouterApp from './route/index';
import { Provider } from 'react-redux';
import AppStore from './store/AppStore';

function App() {
  return (
    <Provider store={AppStore}>
      {/* <h2>Hello Everyone</h2>
      <TransferApp /> */}
      <RouterApp />
    </Provider>
  );
}

export default App;
