import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './App.css';
import { About, Header, Main } from './pages';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Main />
        },
        {
          path: "about",
          element: <About />,
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
