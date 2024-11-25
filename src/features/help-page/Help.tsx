import { useContext } from 'react';

import AuthHelp from './auth-help/AuthHelp';
import PublicHelp from './public-help/PublicHelp';
import { AuthContext } from '../../context/auth/AuthProvider';

const HelpPage = () => {
  const { authState } = useContext(AuthContext);
  if (authState.authenticated) {
    return <AuthHelp />;
  }
  return <PublicHelp />;
};

export default HelpPage;
