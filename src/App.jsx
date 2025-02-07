
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutPage from './pages/About/About';
import WorkPage from './pages/Work/WorkPage';
import BlogPage from './pages/Blog/BlogPage';
import ContactPage from './pages/Contact/ContactPage';

function App() {

  const route = createBrowserRouter([
    {
      path: "/AvoSite/",
      element: <Homepage />,
    },
    {
      path: "/AvoSite/about",
      element: <AboutPage />,
    },
    {
      path: "/AvoSite/work",
      element: <WorkPage />,
    },
    {
      path: "/AvoSite/blog",
      element: <BlogPage />,
    },
    {
      path: "/AvoSite/contact",
      element: <ContactPage />,
    },
  ]);

  return (
    <RouterProvider router={route} />
  );
}

export default App;



