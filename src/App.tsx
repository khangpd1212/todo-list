import "./App.css";
import { Counter } from "./screens/user/components/Counter";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
