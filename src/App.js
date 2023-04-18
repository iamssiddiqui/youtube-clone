import "./App.css"
import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
import Head from "./components/Head";
function App() {
  return (
    <Provider store={store}>
    <div>
      <Head />
      <Body />
    </div>
    </Provider>

  );
}

export default App;
