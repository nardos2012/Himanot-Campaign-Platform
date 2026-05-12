import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import SingleNews from "./pages/SingleNews";
import Events from "./pages/Events";
import SingleEvent from "./pages/SingleEvent";
import Donate from "./pages/Donate";
import Join from "./pages/Join";
import Register from "./pages/Register";
import Supporters from "./pages/Supporters";
import Analytics from "./pages/Analytics";

import AdminLogin from "./pages/AdminLogin";
import AdminPosts from "./pages/AdminPosts";
import AdminEvents from "./pages/AdminEvents";
import AdminDonations from "./pages/AdminDonations";
import AdminSupporters from "./pages/AdminSupporters";
import AdminEmail from "./pages/AdminEmail";

import AdminLayout
  from "./layouts/AdminLayout";

import ProtectedRoute
  from "./components/ProtectedRoute";

import NotFound
  from "./pages/NotFound";

function App() {

  return (
    <div className="pt-20">
    <Routes>

      {/* PUBLIC ROUTES */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/news"
        element={<News />}
      />

      <Route
        path="/news/:id"
        element={<SingleNews />}
      />

      <Route
        path="/events"
        element={<Events />}
      />

      <Route
        path="/events/:id"
        element={<SingleEvent />}
      />

      <Route
        path="/donate"
        element={<Donate />}
      />

      <Route
        path="/join"
        element={<Join />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/supporters"
        element={<Supporters />}
      />

      <Route
        path="/analytics"
        element={<Analytics />}
      />

      {/* AUTH */}

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      {/* ADMIN ROUTES */}

      <Route
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >

        <Route
          path="/admin/posts"
          element={<AdminPosts />}
        />

        <Route
          path="/admin/events"
          element={<AdminEvents />}
        />

        <Route
          path="/admin/donations"
          element={<AdminDonations />}
        />

        <Route
          path="/admin/supporters"
          element={<AdminSupporters />}
        />

        <Route
          path="/admin/email"
          element={<AdminEmail />}
        />

        <Route
          path="/admin/analytics"
          element={<Analytics />}
        />

      </Route>

      {/* 404 */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
    </div>

  );

}

export default App;