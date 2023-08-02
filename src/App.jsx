import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { UserProfile } from "./UserProfile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
