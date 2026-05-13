import {
  Helmet,
} from "react-helmet-async";

export default function NotFound() {
    return (
      <>
  <Helmet>

    <title>
      Page Not Found | GOGOT PARTY
    </title>

    <meta
      name="description"
      content="
        The page you are looking for
        could not be found.
      "
    />

  </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 dark:text-white">
        <h1 className="text-7xl font-black mb-4">
          404
        </h1>
  
        <p className="text-xl text-gray-500 dark:text-gray-300">
          Page not found
        </p>
      </div>
      </>
    );
  }