import React from 'react';
import { cafe } from './type/cafe';

interface OwnProps {
  info: cafe;
}

const Store: React.FC<OwnProps> = ({ info }) => {
  return (
    <div>
      <div>{info.name}</div>
    </div>
  );
};

export default Store;
