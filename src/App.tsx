import React from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './store';
import { cafe } from './type/cafe';

let data: cafe = {
  name: 'my cafe',
  category: 'western',
  address: {
    city: 'seoul',
    detail: 'somewhere',
    zipcode: 12341234,
  },
  menu: [
    { name: 'coffee', price: 3000 },
    { name: 'latte', price: 3500 },
  ],
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Store info={data} />
    </div>
  );
};

export default App;
