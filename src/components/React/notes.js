//! what is difference between library vs Framework

//! what is CDN - content delivery network

// eslint-disable-next-line react/no-unknown-property, @next/next/no-sync-scripts
// <script crossOrigin src=""  ></script>

//! what is cross origin

//! what is difference between async and defer]

//! what is difference between React vs ReactDOM

//!  what is bundlers
// a "bundler" refers to a tool or system that is used to bundle together multiple files and dependencies into a single, optimized file or set of files.
// primary goal of bundlers is to simplify the deployment and loading of assets in web applications.
// minify ur code / remove a console /
//! parcel - webpack -

//! webpack and babel
// next.config.js
// babel.config.js
//  you ever need to customize the Webpack configuration in your Next.js project, you can do so by creating a next.config.js

//! what is package
// package gives functionality to ur project

//! package manager

//! what is npm ?
// npm is node package manager

// npm init -y

// npm install -D parcel

// dependencies - all packages are installed in project
//

// current version
// ^ tilde minor version  // PATCH VERSION /  Compatible with version, i.e., accept new minor and patch versions
// ~ caret major version  // Minor and Patch Version /	Approximately equivalent to version, i.e., only accept new patch version
// Major version not changed automatically

// what is the package.lock.json
// it is maintain they integrity

// what is the package.json

// npm i react
// npm i react-dom
// npm i -d parcel

// npx - execute using npm
// command to execute our project
// npx parcel index.html  -- entry point of our project
// npx build parcel index.html
// npx == npm run -- npm

// usages of parcel
//! hot module Replacement - HMR - parcel keep tracking of pages
//! File watchers algorithm
//! minified the code
//! bundling
//! cleaning they code
//! different builds for production and development
//! Removing a consoles
//! image optimization (minify images / compress)
//! caching while development
//! compression your files
//! rewriting our code
//! optimizing our code
//! it takes care of older version of browsers -- compatible with older version of browser
//! it add polyfill
//! https on dev
//! manage they port numbers
//! consistent hashing
//! zero config bundler
//! created server for you
//! TREE SHaking - removing unwanted code

//# transitive dependency --
//!

// note
//! anything is auto generated not push in git ignore

//! package.json use to manage dependencies
// dev  dependencies and dependencies

//* 3rd lecture
//todo ==================================================================>

//! what is jsx ?
// jsx is html like syntax but its not html inside they js
// html like syntax write in js known as jsx

// createElement give us object and that will be converted into htmlDOM

// JSX use react.createElement behind the scene  ===

//   React.createElement ==> object ==> Html(dom)
//   JSX ==> React.createElement ==> object ==> Html(dom)

//! React.createElement vs JSX

//! what is different uses of jsx
//  how to write className in jsx how to write css in jsx

//! super power of jsx ?
// readability

//! what is babel ?
// babel is java script library or node package
// usages of babel -  it is like parse it will converted jsx into html code
// also it can be used to remove a consoles from non dev environment
// Abstract syntax  tree - ATS
// babel is create html like syntax in js to plain html --

//! what is babel and parcel role in jsx ?

//! what is component

//! what is function component

//! what is composing components

//! react -- give key proper
//! end of the day React.createElement is and object

// =============
// Types Of react components
// 1 - functional components
// 2 - classBased components

/// what is react element it is just object

//! Functional Components
// it is new way of writing components in react
// function component is nothing but a function that return some pieces of jsx or React.Element or  or another component

//* functional component or any other component name start with capital letters -- it is not mandatory but good practice to use

// jsx -- avoid cross site scripting attack it will sensitize attack

//! component composition / composing components---  inside component used another component / nested components - or

// JSX have only one parent
// React.Fragment we can only one parent  --- we can also use like <> </>
// it is like empty tag --- it is short hand for react.Fragment

//! config driven ui / dynamic ui

//* Virtual Dom ---
// it is representation of dom
// we keep a  representation of dom with us this is know as virtual dom

//! why do you need virtual dom in react
// we need virtual dom in react for reconciliation in react
// react use is reconciliation algorithm to deep one tree  from other  and it determines what you need to change and does not need to be change it
// deep algorithm

//! reconciliation --- means that react uses the deep algorithm to find out they difference between your trees (actual dom and virtual dom ) and then it find out whats need to be updated and just update that small portion of it it does not re render whole app   it just re render that small portion

//! React Fiber -it is reconciliation engine it came in React diff

// import export

// named export -- default export
// named import -- default import

//! react has one way dataBinding
// whenever you to change variable inside   react or maintain variable in  react then then use states
// react variable or state variable ---
//! every component in react maintain a state  you can put all they variables in states
// and every time you want use local variable then use state in react

//! what is state ?
//! what is hook ?
// at the end of the day hooks is just function
// this is written by facebook developer and that hooks give use some functionalities
// every hook has specific function

//! what is use state hook ?

// use state hooke used to create state variable  (local state variable )
// useState function -- to create state variable
// this function return array and first element of array is the variable name (local state variable )  and second element is function

// function is used to update variable -- setState()
// react always watch state variable whenever state variable changes react it will be automatically   rerender the component

//! why we need state variable when we have local variable ?

//Why react is fast -- because it fast dom manipulation

// ==============================================================================================================

// UI Microservice

// MicroServices   vs Monolith Architecture

// what is useEffect --- it is hook / at then end of the day it is function
// we can call useEffect function using giving two parameter one is callback function and second is dependency array
// [] - it will be called just once after initial render
// conditional rendering
//js statement vs js expression

//what was use of useEffect hook

// Never Right component inside the component
// Never Ever Right  UseState inside the if else and for loop
//  useState only create in functional component

// Routing Configuration in React
// createBrowserRouter -- it is function where we can configure our paths
// <RouterProvider route={}/>--  it is component we need to wrap all component here  --[React-router-dom]
// <Link to""/> ---  --[React-router-dom]
// <Outlet /> --[React-router-dom]

// ! hooks start with use
//! useRouteError   -- it give 404 for error status  ---[React-router-dom]

// SPA -- single page application

// Routing
//1) Client Side Routing --- without making network call
//2) Server Side Routing -- server side routing is the way that all are pages come form server

//Nested Routing ----------

// Dynamic Routing

//! useParam --Hook  -- Read Dynamic Param ---[React-router-dom]

// constructor is place that is use for initialization

// constructor ===> render ===> componentDidMount  ==> render ==?

// setIntervals -- clearIntervals

useEffect(() => {
  return () => {
    clearInterval();
  };
}, []);

// componentWillUnmount used for cleaning  - setTimeouts and setIntervals

// why use custom -
// it  readability
// reusability
// separation of concern
// maintainability
// export that logic into a function

//! Chunking
// code splitting
// dynamic bundling
// lazy loading
// on demand bundling
// dynamic import

// import {Children, Component, lazy,Suspense}from "react";
// InstaMart = lazy(
//   () => import("./components/Instamart")
// );

// <Suspense fallback{}>
// <InstaMart/>
// </Suspense>

//!=======  For Interview
//! done lazy loading
//! componentWillUnmount -- clear all setTimeout and setIntervals and EventListeners
// when your loading a component in demand then react suspend they component

// Mui /
// to write optimize css / save time
// SASS

// Ui libraries
//! Mui
//! Antd
//! Base Web
//! tailwind
//! bootstrap
//! chakara

// easy to use
//! it is easy to use
//! it reusable
//! consistent
//! automatic theming
//!

//! ============ Tailwind CSS ===
// css on the go -- (in the same file )
// it is reusable / reusability
// it less bundle size
// easy to debug
// no duplicate css
// faster development
// it is flexible -- we can make flexible ui --- we customize based on our requirement
// libraries --- packages
// it will be override all default styles of tag and others
// tailwind css work with only className
// we can pass dynamic value be like w-[200px]
// we not need move html file to css file
// it also work with hmr
// it is never way to writing a css

//! coins
// initially high learning curve
// it is not readable

//!========================================================== difference between state and props

// State has scope only within the Component
// whenever state is change then component will be rerender
// it is special variable whenever it change then component will be rerender
// it is they local variable

//what is props ?
// props is the value that we can pass one component to another component
// properties that receiving    inside the component

// wha tis prop drilling
// passing data form one component to another component using props

//!how to pass data child to parent

//! what is disadvantages of prop drilling
// if we prop drilling more component and suppose we change the props then it will rerender the component
// makes our code clustered

//!!!!!!!!!!!!!!!!!! Lifting state up

// const Parent =()=>{
//   const [testState,setTestState]= useState();
// return (<>
//   <Children setTestState={(data)=> {// update here state // data is passed for child }}
//   </>)
// }

// const Children =({setTestState}) => {
//   // setLastNmae it update based on condition
//   //
//   return (<>
//     </>)
// }
// // <Test setLastName={(data)=> {// update here state // data is passed for child }}

//!!!!================ what is context ? how to use it ? why do you use it ? when do you use it ?\\

// ! why do we use it ? when do you use it ?
// because i want access data anywhere in my app

//! what is context ?
// this is kind central place where we can store a data and access form anywhere in application
// it is not tide to a component

//! how to use it ?

//! can have multiple context in my app ?

//===========================================================================================================================
import { createContext } from "react";

// const userContext =createContext({
//   user:{
//     name:"sachin",
//     place:"karad"
//   }

// })

// export default userContext

//======

// import { useContext } from "react";
// import userContext from "../utils/userContext"

// // in function component
// const {user}= useContext(userContext);

// // in class component

// <userContext.Consumer>
// {(data)=> {<></>}}
// </userContext.Consumer>

//! modify data
// we can modify userContext using Provider
// rape the hole app
// in value provide default that override the original value
// <userContext.Provider value={}>
// all components
// </userContext.Provider>

// //! where should is provider
// userContext.displayNsm=="sdfds"
