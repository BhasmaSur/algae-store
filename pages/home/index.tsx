import { LoggingDetails } from '@/interfaces/authentication/authenticationInterface';
import { getCookieObject } from '@/lib/utils/loginFunctions';
import { useEffect, useState } from 'react';

const Home = () => {
  const [userLogginDetails, setUserLogginDetails] = useState<LoggingDetails>();
  useEffect(() => {
    setUserLogginDetails(getCookieObject());
  }, []);
  return <div>{userLogginDetails?.name}</div>;
};

export default Home;
