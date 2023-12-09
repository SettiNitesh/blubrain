import { ToastContainer } from "react-toastify";
import "./App.css";
import { SignUpContainer } from "./containers";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
      />
      <SignUpContainer />
    </div>
  );
}

export default App;
