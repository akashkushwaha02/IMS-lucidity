import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, IconButton, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CategoryIcon from '@mui/icons-material/Category';
import { formatNumber } from '../utils/utils'

const TopWidgets = () => {
  const { totalProducts, totalStoreValue, outOfStock, categories } = useSelector(
    (state) => state.inventory
  );

  return (
    <Grid container spacing={2} className="top-widgets">
      <Paper className="widget">
        <IconButton
          aria-label="delete"
          color="white"
          onClick={() => handleDelete(index)}
          className='widget-icon'
        >
          <ShoppingCartIcon sx={{ color: 'white' }} />
        </IconButton>
        <Box>
          <p className='widget-label'>Total Products</p>
          <span className='widget-value'>{totalProducts}</span>
        </Box>

      </Paper>
      <Paper className="widget">
        <IconButton
          aria-label="delete"
          color="white"
          onClick={() => handleDelete(index)}
          className='widget-icon'
        >
          <CurrencyExchangeIcon sx={{ color: 'white' }} />
        </IconButton>
        <Box>
          <p className='widget-label'>Total Store Value</p>
          <span className='widget-value'>${formatNumber(totalStoreValue)}</span>
        </Box></Paper>
      <Paper className="widget">
        <IconButton
          aria-label="delete"
          color="white"
          className='widget-icon'
          onClick={() => handleDelete(index)}
        >
          <RemoveShoppingCartIcon sx={{ color: 'white' }} />
        </IconButton>
        <Box>
          <p className='widget-label'>Out of Stock</p>
          <span className='widget-value'>{outOfStock}</span>
        </Box> </Paper>
      <Paper className="widget">
        <IconButton
          aria-label="delete"
          color="white"
          className='widget-icon'
          onClick={() => handleDelete(index)}
        >
          <CategoryIcon sx={{ color: 'white' }} />
        </IconButton>
        <Box>
          <p className='widget-label'>Categories</p>
          <span className='widget-value'>{categories?.length}</span>
        </Box> </Paper>
    </Grid>
  );
};

export default TopWidgets;
