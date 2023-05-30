import "antd/dist/reset.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </Provider>
    </div>
  );
}

export default App;
