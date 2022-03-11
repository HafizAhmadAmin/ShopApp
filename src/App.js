import { Provider } from "mobx-react";
import "./App.css";
import Shop from "./components/Shop";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <Shop />
      </Provider>
  );
}

export default App;
