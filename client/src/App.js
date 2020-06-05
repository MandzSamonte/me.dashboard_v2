import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Sidebar from './layout/Sidebar';
import Content from './layout/Content';

import Card from './components/Card';

function App() {
  return (
    <Router>
      <div className="flex bg-gray-200">
        <Sidebar />

        <Content>
          <div className="mb-5">
            <Card className="w-full h-20 shadow-md"></Card>
          </div>

          <div className="flex h-full">
            <div className="w-2/3 mr-5">
              <Card className="w-full h-full shadow-md"></Card>
            </div>

            <div className="flex flex-col w-1/3">
              <Card className="w-full h-full shadow-md"></Card>
              <Card className="w-full h-full shadow-md mt-5"></Card>
            </div>
          </div>
        </Content>
      </div>
    </Router>
  );
}

export default App;