import { useRoutes } from 'react-router-dom';
import React, { Suspense } from 'react';

// Lazy-loaded components
const HomePage = React.lazy(() => import('../features/home-page/HomePage'));
const HelpPage = React.lazy(() => import('../features/help-page/Help'));
const Schedule = React.lazy(() => import('../features/schedule/Schedule'));
const Login = React.lazy(() => import('../features/login/Login'));
const Register = React.lazy(() => import('../features/register/Register'));
const RunData = React.lazy(() => import('@/features/run-data/RunData'));
const JoinMarathon = React.lazy(
  () => import('../features/filler-join-run/marathon/JoinMarathon')
);
const JoinCarnival = React.lazy(
  () => import('../features/filler-join-run/cheerful-carnival/JoinCarnival')
);
const CreateRun = React.lazy(() => import('../features/create-run/CreateRun'));
const JoinRun = React.lazy(() => import('@/features/manager-join-run/JoinRun'));
const Settings = React.lazy(() => import('@/features/settings/Settings'));
const ChangeEvent = React.lazy(
  () => import('@/features/change-event/ChangeEvent')
);
const Error404 = React.lazy(() => import('@/features/error-page/Error404'));

// Route paths as constants
export const ROUTE_PATHS = {
  HOME: '/',
  HELP: '/help',
  SCHEDULE: '/schedule',
  LOGIN: '/login',
  REGISTER: '/register',
  RUN_DATA: '/data',
  MARATHON: '/marathon',
  CARNIVAL: '/carnival',
  CREATE_RUN: '/create-run',
  JOIN_RUN: '/join-run',
  SETTINGS: '/settings',
  CHANGE_EVENT: '/change-event',
  UNKNOWN: '/*',
};

const AppRoutes = () => {
  const routes = useRoutes([
    { path: ROUTE_PATHS.HOME, element: <HomePage /> },
    { path: ROUTE_PATHS.HELP, element: <HelpPage /> },
    { path: ROUTE_PATHS.SCHEDULE, element: <Schedule /> },
    { path: ROUTE_PATHS.LOGIN, element: <Login /> },
    { path: ROUTE_PATHS.REGISTER, element: <Register /> },
    { path: ROUTE_PATHS.RUN_DATA, element: <RunData /> },
    { path: ROUTE_PATHS.MARATHON, element: <JoinMarathon /> },
    { path: ROUTE_PATHS.CARNIVAL, element: <JoinCarnival /> },
    { path: ROUTE_PATHS.CREATE_RUN, element: <CreateRun /> },
    { path: ROUTE_PATHS.JOIN_RUN, element: <JoinRun /> },
    { path: ROUTE_PATHS.SETTINGS, element: <Settings /> },
    { path: ROUTE_PATHS.CHANGE_EVENT, element: <ChangeEvent /> },
    { path: ROUTE_PATHS.UNKNOWN, element: <Error404 /> },
  ]);

  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
};

export default AppRoutes;
