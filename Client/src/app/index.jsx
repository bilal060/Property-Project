import React, { useEffect } from 'react';
import Router from '../router/index';
import { useSelector } from 'react-redux';
import { selectAuth } from '../redux/auth/selectors';
// import { useNetworkState } from "react-use";
import Layout from '../layout';

function App() {
  // const [isOnline] = useNetwork();
  // // const networkState = useNetworkState();

  // if (!isOnline) {
  //   notification.config({
  //     duration: 0,
  //   });
  //   notification.error({
  //     message: "No internet connection",
  //     description: "Cannot connect to the server, Check your internet network",
  //   });
  // }

  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <>
      <Layout>
        
        <Router />
      </Layout>
    </>
  );
}

export default App;
