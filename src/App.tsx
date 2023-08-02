import React, { useState } from 'react';
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
  const [myCafe, setMyCafe] = useState<cafe>(data);
  return (
    <div className="App">
      <Store info={myCafe} />
    </div>
  );
};

export default App;
