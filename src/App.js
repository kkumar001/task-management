import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Edit, AddTask, ViewTask} from './components/index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Home />} />
        <Route exact path='/Edit' element={< Edit />} />
        <Route exact path='/addtask' element={< AddTask />} />
        <Route exact path='/viewtask' element={< ViewTask />} />
      </Routes>
    </Router>
  )
}

export default App