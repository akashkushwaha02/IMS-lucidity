import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProduct } from './redux/inventorySlice';
import AdminView from './components/AdminView';
import UserView from './components/UserView';
import { Switch, FormControlLabel } from '@mui/material';
import useFetchInventory from './hooks/useFetchInventory';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const [isAdmin, setIsAdmin] = useState(true);
  const { data, isLoading, error } = useFetchInventory(
    'inventory'
  );

  useEffect(() => {
    if (data) {
      dispatch(setProduct(data));
    }
  }, [data, dispatch]);

  const handleSwitchChange = (event) => {
    setIsAdmin(!event.target.checked);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h2>Error: {error}</h2>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="app">
      <header>
        <div>
          <span style={{ marginRight: '12px' }}>Admin</span>
          <FormControlLabel
            control={<Switch checked={!isAdmin} onChange={handleSwitchChange} />}
          />
          User
        </div>
        <h1>Inventory Management</h1>
      </header>
      {isAdmin ? <AdminView /> : <UserView />}
    </div>
  );
};

export default App;
