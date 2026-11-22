import { useState } from "react";
import LoginScreen from "./components/LoginScreen";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [auth, setAuth] = useState(() => {
    const savedAuth = localStorage.getItem("schoolHubAuth");

    return savedAuth ? JSON.parse(savedAuth) : null;
  });

  // Called with { token, user } after login or OTP verification.
  function handleLogin(data) {
    const authData = {
      token: data.token,
      user: data.user,
    };

    localStorage.setItem("schoolHubAuth", JSON.stringify(authData));

    setAuth(authData);
  }

  function handleLogout() {
    localStorage.removeItem("schoolHubAuth");
    setAuth(null);
  }

  if (!auth) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return <Dashboard user={auth.user} onLogout={handleLogout} />;
};

export default App;
