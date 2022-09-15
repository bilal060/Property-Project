import React, { useEffect } from 'react';
import Router from '../router/index';
import { useSelector } from 'react-redux';
// import { useNetworkState } from "react-use";
import Layout from '../layout';
import UserLayout from '../Dashboard/UserLayout';
import UserRouter from '../Dashboard/Router';

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

  return (
    <>
      <Layout>
        <Router />
      </Layout>

      {/* <UserLayout>
        <UserRouter />
      </UserLayout> */}
    </>
  );
}

export default App;
