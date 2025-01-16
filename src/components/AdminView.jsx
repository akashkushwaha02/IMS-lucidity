import React, { useState } from 'react';
import ProductTable from './ProductTable';
import EditProductModal from './EditProductModal';
import TopWidgets from './TopWidgets.jsx';

const AdminView = () => {
  const [editIndex, setEditIndex] = useState(null);

  const openEditModal = (index) => {
    setEditIndex(index);
  };

  const closeEditModal = () => {
    setEditIndex(null);
  };

  return (
    <div>
      <TopWidgets />

      <ProductTable isAdmin={true} openEditModal={openEditModal} />
      {editIndex !== null && <EditProductModal index={editIndex} onClose={closeEditModal} />}
    </div>
  );
};

export default AdminView;
