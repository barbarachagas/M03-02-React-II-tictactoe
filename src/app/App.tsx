import { Provider } from "react-redux";
import TicTacToe from "../component/TicTacToe";
import { store } from "../component/store";

function App() {
  return (
    <Provider store={store}>
      <TicTacToe />
    </Provider>
  );
}

export default App;
