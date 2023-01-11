import { createBrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import MainLayout from './Layouts/Main';
import Dashboard from './Pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/home',
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
