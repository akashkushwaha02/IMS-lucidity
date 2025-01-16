import React from 'react';
import ProductTable from './ProductTable';
import TopWidgets from './TopWidgets';

const UserView = () => {
  return (
    <div>
      <TopWidgets />
      <ProductTable isAdmin={false} />
    </div>
  );
};

export default UserView;
