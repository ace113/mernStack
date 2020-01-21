import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from "./components/navbar.component"
import CreateExercise from "./components/create-exercise.component";
import EditExercise from "./components/edit-exercise.component";
import ExercisesList from "./components/exercises-list.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </div>
  </Router>
    // <div className="App">
    //     Hello World
    // </div>
  );
}

export default App;
