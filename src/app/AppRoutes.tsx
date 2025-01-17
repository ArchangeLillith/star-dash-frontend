import { useRoutes } from 'react-router-dom';

import CreateRun from '../features/create-run/CreateRun';
import HelpPage from '../features/help-page/Help';
import HomePage from '../features/home-page/HomePage';
import JoinCarnival from '../features/filler-join-run/cheerful-carnival/JoinCarnival';
import JoinMarathon from '../features/filler-join-run/marathon/JoinMarathon';
import Login from '../features/login/Login';
import Register from '../features/register/Register';
import Schedule from '../features/schedule/Schedule';
import RunData from '@/features/run-data/RunData';
import Settings from '@/features/settings/Settings';
import JoinRun from '@/features/manager-join-run/JoinRun';
import ChangeEvent from '@/features/change-event/ChangeEvent';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/help', element: <HelpPage /> },
    { path: '/schedule', element: <Schedule /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/data', element: <RunData /> },
    { path: '/marathon', element: <JoinMarathon /> },
    { path: '/carnival', element: <JoinCarnival /> },
    { path: '/create-run', element: <CreateRun /> },
    { path: '/join-run', element: <JoinRun /> },
    { path: '/settings', element: <Settings /> },
    { path: '/change-event', element: <ChangeEvent /> },
  ]);

  return routes;
};

export default App;
