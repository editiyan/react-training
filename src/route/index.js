import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TransferApp from "../day2-practice/components";
import Utang from "../utang";

export default function App() {
  return (
    <Router>
        <div className="App">
            <nav className="flex items-center justify-between flex-wrap bg-blue-400 p-2">
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/" className="block lg:inline-block lg:mt-0 text-blue-300 font-bold text-lg hover:text-white hover:underline group-focus:text-white group-focus:underline mr-4">
                            Home
                        </Link>
                        <Link to="/about" className="block lg:inline-block lg:mt-0 text-blue-300 font-bold text-lg hover:text-white hover:underline group-focus:text-white group-focus:underline mr-4">
                            About
                        </Link>
                        <Link to="/users" className="block lg:inline-block lg:mt-0 text-blue-300 font-bold text-lg hover:text-white hover:underline group-focus:text-white group-focus:underline mr-4">
                            Users
                        </Link>
                        <Link to="/app" className="block lg:inline-block lg:mt-0 text-blue-300 font-bold text-lg hover:text-white hover:underline group-focus:text-white group-focus:underline mr-4">
                            App
                        </Link>
                        <Link to="/utang" className="block lg:inline-block lg:mt-0 text-blue-300 font-bold text-lg hover:text-white hover:underline group-focus:text-white group-focus:underline">
                            Utang
                        </Link>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route path="/utang">
                    <Utang />
                </Route>
                <Route path="/app">
                    <TransferApp />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}