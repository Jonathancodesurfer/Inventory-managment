import './App.css';
import { Provider } from 'react-redux';
import Items from './containers/Items';
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Items />
    </Provider>
  );
}

export default App;
