import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { createContext } from 'react';
import gif from './images/uu.gif';
import MessengerCustomerChat from 'react-messenger-customer-chat';
// Routers

// import ChatWithUs from "./components/ChatWithUs/ChatWithUs";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import AddService from "./pages/Dashboard/AddService/AddService";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./pages/Dashboard/ManageService/ManageService";
import OrderList from "./pages/Dashboard/OrderList/OrderList";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Subscribe from "./components/Subscribe/Subscribe";
import AllBlogs from "./pages/AllBlogs/AllBlogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import AboutUs from './components/AboutUs/AboutUs';
import Dashboard from './pages/Dashboard/Dashboard';
import AllServices from './pages/AllServices/AllServices';
import Services from './pages/ServiceDetails/ServiceDetails';
import Consumers from './pages/Dashboard/Consumers/Consumers';
import ServiceProvider from './pages/Dashboard/ServiceProvider/ServiceProvider';
import ServiceList from './pages/Dashboard/ServiceList/ServiceList';
import SingleServiceDash from './pages/Dashboard/ServiceList/SingleServiceDash/SingleServiceDash';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ReviewList from './pages/Dashboard/ReviewList/ReviewList';
import ProviderOwnServices from './pages/Dashboard/ProviderOwnServices/ProviderOwnServices';
import Shipment from './components/Shipment/Shipment';
import Contact from './components/Contact/Contact';
import OwnOrderList from './pages/Dashboard/OwnOrderList/OwnOrderList';
import ReceivedOrder from './pages/Dashboard/ReceivedOrder/ReceivedOrder';

export const userContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const USER = JSON.parse(sessionStorage.getItem('user'));
    if (USER) {
      setLoggedInUser(USER)
    }
    console.log(USER)
  }, [loggedInUser.role])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const gifStyle = {
    width: "100vw",
    height: "100vh"
  }
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {
        isLoading ? <img style={gifStyle} src={gif} alt="" /> :

          <Router>
            <MessengerCustomerChat
              pageId="104057955200408"
              appId="421325092900297"
            />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/login" exact component={() => (!user ? <Login /> : <Redirect to="/home" />)} />
              <Route path="/blogs">
                <AllBlogs />
              </Route>
              <Route path="/about">
                <AboutUs />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/blogDetails/:blogId">
                <BlogDetails />
              </Route>
              <Route path="/services/:id">
                <Services />
              </Route>
              <Route path="/services">
                <AllServices />
              </Route>
              <Route path="/subscribe">
                <Subscribe />
              </Route>
              <PrivateRoute path="/shipment/:id">
                <Shipment />
              </PrivateRoute>
              {/* Dashboard Item */}

              <PrivateRoute path="/dashboard"><Dashboard /></PrivateRoute>
              <PrivateRoute
                path="/addReview"
                exact component={() => ((loggedInUser?.role === "consumer")
                  ? <AddReview />
                  : <Redirect to="/dashboard" />)}
              />

              <PrivateRoute
                path="/providerOwnServices"
                exact component={() => ((loggedInUser?.role === "service-provider")
                  ? <ProviderOwnServices />
                  : <Redirect to="/dashboard" />)}
              />

              <PrivateRoute
                path="/reviewList"
                exact component={() => ((loggedInUser?.role === "admin")
                  ? <ReviewList />
                  : <Redirect to="/dashboard" />)}
              />

              <PrivateRoute
                path="/makeAdmin"
                exact component={() => ((loggedInUser?.role === "admin")
                  ? <MakeAdmin />
                  : <Redirect to="/dashboard" />)}
              />

              <PrivateRoute
                path="/addService"
                exact component={() => ((loggedInUser?.role === "service-provider" || loggedInUser?.role === "admin")
                  ? <AddService />
                  : <Redirect to="/dashboard" />)}
              />

              <PrivateRoute
                path="/consumersList"
                exact component={() => ((loggedInUser?.role === "admin")
                  ? <Consumers />
                  : <Redirect to="/dashboard" />)}
              />

              <PrivateRoute
                path="/serviceProvidersList"
                exact component={() => ((loggedInUser?.role === "admin")
                  ? <ServiceProvider />
                  : <Redirect to="/dashboard" />)}
              />

              <PrivateRoute
                path="/serviceList"
                exact component={() => ((loggedInUser?.role === "admin")
                  ? <ServiceList />
                  : <Redirect to="/dashboard" />)}
              />
              <PrivateRoute
                path="/singleService/:id"
                exact component={() => ((loggedInUser?.role === "admin" || loggedInUser?.role === "service-provider")
                  ? <SingleServiceDash />
                  : <Redirect to="/dashboard" />)}
              />

              <PrivateRoute
                path="/orderList"
                exact component={() => ((loggedInUser?.role === "admin")
                  ? <OrderList />
                  : <Redirect to="/dashboard" />)}
              />

              <PrivateRoute
                path="/ownOrderedList"
                exact component={() => ((loggedInUser?.role === "admin" || loggedInUser?.role === "service-provider" || loggedInUser?.role === "consumer")
                  ? <OwnOrderList />
                  : <Redirect to="/dashboard" />)}
              />

              <PrivateRoute
                path="/receivedOrder"
                exact component={() => ((loggedInUser?.role === "service-provider")
                  ? <ReceivedOrder />
                  : <Redirect to="/dashboard" />)}
              />

              <PrivateRoute path="/manageServices"> <ManageServices /> </PrivateRoute>
              {/* Dashboard end */}


            </Switch>
            {/* <ChatWithUs /> */}
          </Router>
      }
    </userContext.Provider>
  );
}

export default App;
