import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  } from '@apollo/client';

import {
    RouterProvider,
    createBrowserRouter
 } from 'react-router-dom'

import App from './App'
import Dashboard from './pages/Dashboard'
import MyJars from './pages/MyJars'
import Friends from './pages/Friends';
import Account from './pages/Account'
import Settings from './pages/Settings'
import CreateAccount from './pages/CreateAccount';
import SignIn from './pages/SignIn';
import Welcome from './pages/Welcome'
import About from './pages/About'

/*const httpLink = createHttpLink({
    uri: 'http://localhost:9080/graphql'
 
  })*/
  
 /* const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers
      }
    }
  }) */
  
  /*const errorLink = onError(({ graphqlErrors, networkError }) => {
      if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
          alert(`Graphql error ${message}`);
        });
      }
    });

  const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:6969/graphql" }),
  ]); */


  /*const httpLink = createHttpLink({
    uri: 'http://localhost:9080/graphql'
  })
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers
      }
    }
  }) 
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  }); */


  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri:'http://localhost:9080/positivityJar/graphql'
  }) 
  
  /*  const graphql = require("graphql");
    const {
      GraphQLObjectType,
      GraphQLSchema,
      GraphQLInt,
      GraphQLString,
      GraphQLList,
    } = graphql;
    const userData = require("./sampleJarData.json");

    const UserType = require("./UserType")

    const RootQuery = new GraphQLObjectType({
      name: "RootQueryType",
      fields: {
        getAllUsers: {
          type: new GraphQLList(UserType),
          args: { id: { type: GraphQLInt } },
          resolve(parent, args) {
            return userData;
          },
        },
      },
    });
    
    const Mutation = new GraphQLObjectType({
      name: "Mutation",
      fields: {
        createUser: {
          type: UserType,
          args: {
            firstName: { type: GraphQLString },
            lastName: { type: GraphQLString },
            email: { type: GraphQLString },
            password: { type: GraphQLString },
          },
          resolve(parent, args) {
            userData.push({
              id: userData.length + 1,
              firstName: args.firstName,
              lastName: args.lastName,
              email: args.email,
              password: args.password,
            });
            return args;
          },
        },
      },
    }); */

   // module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

  const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
    /*{
      path: '/create-account',
      element: <CreateAccount />
    }, */ 
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/my-jars',
      element: <MyJars />
    },
   /* {
      path: '/friends',
      element: <Friends />
    }, */
    {
      path: '/account',
      element: <Account />
     
 
    },
    {
      path: '/settings',
      element: <Settings />
    },
    {
      path: "/friends",
      element: <Friends />
    }

      ]
    },
    {
      path: '/create-account',
      element: <CreateAccount />
    }, 
    {
      path: '/sign-in',
      element: <SignIn />
    }, 
    {
      path: '/welcome',
      element: <Welcome />


    },
    {
      path: '/about',
      element: <About />
    }


  ]);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
      <RouterProvider router={router} />
  </ApolloProvider>
);
   
  
  
  /*ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router}>
          <App />
      </RouterProvider>
  ) */