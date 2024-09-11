import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTopOnPageChange from "./utils/scrollToTop";
import Layout from "./page/Layout/Layout";
import Notfound from "./page/notfound/Notfound";
import routes from "./routes/routes";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <ScrollToTopOnPageChange>
          <Layout />
        </ScrollToTopOnPageChange>
      ),
      errorElement: <Notfound />,
      children: routes,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
