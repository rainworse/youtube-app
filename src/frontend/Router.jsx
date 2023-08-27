import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ChannelPage from './pages/ChannelPage';
import VideoPage from './pages/VideoPage';
import LoginPage from './pages/LoginPage';
import Header from './Header';
import Logout from './pages/Logout';
import SearchPage from './pages/SearchPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: 'channel/:id',
          element: <ChannelPage />,
        },

        {
          path: 'video/:id',
          element: <VideoPage />,
        },

        {
          path: 'search/:q',
          element: <SearchPage />,
        },
      ],
    },

    {
      path: 'login',
      element: <LoginPage />,
    },

    {
      path: 'logout',
      element: <Logout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
