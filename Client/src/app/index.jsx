import React, { useEffect } from 'react';
import Router from '../router/index';
import { useSelector } from 'react-redux';
// import { useNetworkState } from "react-use";
import Layout from '../layout';
import UserLayout from '../Dashboard/UserLayout';
import UserRouter from '../Dashboard/Router';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  console.log(location.pathname);
  if (location.pathname.includes('dashboard')) {
    return (
      <>
        <UserLayout>
          <UserRouter />
        </UserLayout>
      </>
    );
  } else {
    return (
      <>
        <Layout>
          <Router />
        </Layout>
      </>
    );
  }
}

export default App;
