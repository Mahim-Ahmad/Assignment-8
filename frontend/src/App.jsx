import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import AllAnimals from "./pages/AllAnimals";
import AnimalDetails from "./pages/AnimalDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile";
import UpdateInfo from "./pages/UpdateInfo";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#182135",
            color: "#EDE8DC",
            border: "1px solid #263248",
          },
        }}
      />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<AllAnimals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/details-page/:id"
            element={
              <PrivateRoute>
                <AnimalDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-profile"
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-profile/update"
            element={
              <PrivateRoute>
                <UpdateInfo />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
