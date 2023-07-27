import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//

import UserPage from './pages/UserPage';
import Page404 from './pages/Page404';
import SignIn from './pages/SignInPage';
import OTP from './pages/OtpPage';
import ChatPage from './pages/ChatPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Index from './pages/Index';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Index />,
      children: [
        {
          path: 'dashboard',
          element: <DashboardLayout />,
          children: [
            // { element: <Navigate to="/dashboard/app" />, index: true },
            // { path: 'app', element: <Navigate to="/dashboard/app" /> },
            { path: 'app', element: <DashboardAppPage />, index: true },
            { path: 'user', element: <UserPage /> },
            { path: 'chat', element: <ChatPage /> },
          ],
        },
        {
          path: 'main',
          element: <SimpleLayout />,
          children: [
            // { element: <Navigate to="/signIn" />, index: true },
            { path: 'signIn', element: <SignIn />, index: true },
            { path: '404', element: <Page404 /> },
            { path: '*', element: <Navigate to="/404" /> },
            { path: 'otp', element: <OTP /> },
          ],
        },
        {
          path: '*',
          element: <Navigate to="/404" replace />,
        },
      ],
    },
  ]);

  return routes;
}
