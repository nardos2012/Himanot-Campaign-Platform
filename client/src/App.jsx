import {
  Suspense,
  lazy,
} from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import {
  Toaster,
} from "react-hot-toast";

import ProtectedRoute
  from "./components/ProtectedRoute";

// LAZY IMPORTS

const Home =
  lazy(() =>
    import("./pages/Home")
  );

const Donate =
  lazy(() =>
    import("./pages/Donate")
  );

const News =
  lazy(() =>
    import("./pages/News")
  );

const SingleNews =
  lazy(() =>
    import("./pages/SingleNews")
  );

const Events =
  lazy(() =>
    import("./pages/Events")
  );

const SingleEvent =
  lazy(() =>
    import("./pages/SingleEvent")
  );

const About =
  lazy(() =>
    import("./pages/About")
  );

const Join =
  lazy(() =>
    import("./pages/Join")
  );

const Register =
  lazy(() =>
    import("./pages/Register")
  );

const Supporters =
  lazy(() =>
    import("./pages/Supporters")
  );

const Analytics =
  lazy(() =>
    import("./pages/Analytics")
  );

const AdminLogin =
  lazy(() =>
    import("./pages/AdminLogin")
  );

const AdminPosts =
  lazy(() =>
    import("./pages/AdminPosts")
  );

const AdminEvents =
  lazy(() =>
    import("./pages/AdminEvents")
  );

const AdminDonations =
  lazy(() =>
    import("./pages/AdminDonations")
  );

const AdminSupporters =
  lazy(() =>
    import("./pages/AdminSupporters")
  );

const AdminEmail =
  lazy(() =>
    import("./pages/AdminEmail")
  );

const AdminLayout =
  lazy(() =>
    import("./layouts/AdminLayout")
  );

const NotFound =
  lazy(() =>
    import("./pages/NotFound")
  );

function App() {

  return (

    <>

      {/* TOAST NOTIFICATIONS */}
      <Toaster
        position="top-right"
      />

      <Suspense

        fallback={

          <div
            className="
              min-h-screen
              flex
              items-center
              justify-center
              text-2xl
              font-bold
            "
          >

            Loading...

          </div>

        }

      >

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

      </Suspense>

    </>

  );

}

export default App;