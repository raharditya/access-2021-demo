import "./styles/custom.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import UserProvider from "./providers/UserProvider";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeviceLimitProvider from "./providers/DeviceLimitProvider";
import Limit from "./pages/Limit";

function App() {
  const [deviceId, setDeviceId] = useLocalStorage("deviceId", "");

  useEffect(() => {
    if (deviceId === "") {
      setDeviceId(uuidv4());
    }
  }, [deviceId, setDeviceId]);

  console.log(deviceId);

  return (
    <UserProvider>
      <DeviceLimitProvider>
        <div className="App">
          <Router>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/login" exact>
              <Login deviceId={deviceId} />
            </Route>

            <Route path="/dashboard" exact>
              <Dashboard deviceId={deviceId} />
            </Route>

            <Route path="/limit" exact>
              <Limit />
            </Route>
          </Router>
        </div>
        <ToastContainer />
      </DeviceLimitProvider>
    </UserProvider>
  );
}

export default App;
