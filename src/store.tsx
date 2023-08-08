import React from 'react';
import { Address, cafe } from './type/cafe';

interface OwnProps {
  info: cafe;
  changeCafe(address: Address): void;
}

const Store: React.FC<OwnProps> = ({ info }) => {
  return (
    <div>
      <div>{info.name}</div>
    </div>
  );
};

export default Store;
