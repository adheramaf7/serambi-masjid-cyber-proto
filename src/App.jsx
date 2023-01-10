import { Heading } from '@chakra-ui/react';
import Login from './Pages/Login';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
