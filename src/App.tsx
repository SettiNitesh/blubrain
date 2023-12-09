import { ToastContainer } from "react-toastify";
import "./App.css";
import { SignInContainer } from "./containers";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
      />
      <SignInContainer />
    </div>
  );
}

export default App;
