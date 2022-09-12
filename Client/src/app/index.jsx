import React, { useEffect } from 'react';
import Router from '../router/index';
import { useSelector } from 'react-redux';
import { selectAuth } from '../redux/auth/selectors';
// import { useNetworkState } from "react-use";
import Layout from '../layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-out-sine',
    delay: 200,
    mirror: true,
  });

  return (
    <>
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
