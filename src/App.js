import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/pagecomponents/NavBar";
import Jarlogo from './pages/images/JarReactTest2.png'
import LineImage from './pages/images/BlackLineBorder.png'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { createHttpLink } from '@apollo/client';
import { onError } from "@apollo/client/link/error";

const App = () => {

   /* const client = new ApolloClient({
      cache: new InMemoryCache(),
      uri: ""
    }) */
  
  
    return (
        <div className="page">
          <div className="header">
            <img src={Jarlogo} className="imagejar" alt="logo" />    
          </div>
          <div className="main flex row">
            <Navbar />
            <Outlet />

          </div>
        </div>
    );
};

export default App;