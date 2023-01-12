import { createBrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import MainLayout from './Layouts/Main';
import Dashboard from './Pages/Dashboard';
import KecamatanDetail from './Pages/KecamatanDetail';
import MasjidDetail from './Pages/MasjidDetail';

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
         {
            path: '/kecamatan-detail',
            element: <KecamatanDetail />,
         },
         {
            path: '/masjid-detail',
            element: <MasjidDetail />,
         },
      ],
   },
]);

export default router;
