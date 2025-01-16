import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { deleteProduct, disableProduct } from '../redux/inventorySlice';


const ProductTable = ({ isAdmin, openEditModal }) => {
  const inventory = useSelector((state) => state.inventory.products);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteProduct(index));
  };

  const handleDisable = (index) => {
    dispatch(disableProduct(index));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Category</strong></TableCell>
            <TableCell align="right"><strong>Price</strong></TableCell>
            <TableCell align="right"><strong>Quantity</strong></TableCell>
            <TableCell align="center"><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventory.map((product, index) => (
            <TableRow
              key={index}
            >
              <TableCell className={product.disabled ? 'disabled' : ''}>{product.name}</TableCell>
              <TableCell className={product.disabled ? 'disabled' : ''}>{product.category}</TableCell>
              <TableCell className={product.disabled ? 'disabled' : ''} align="right">{product.price}</TableCell>
              <TableCell className={product.disabled ? 'disabled' : ''} align="right">{product.quantity}</TableCell>

              <TableCell align="center" >
                <IconButton
                  aria-label="edit"
                  color="primary"
                  onClick={() => openEditModal(index)}
                  disabled={!isAdmin || product.disabled}
                >
                  <EditIcon color={isAdmin && !product.disabled ? 'success' : 'disabled'} />
                </IconButton>
                <IconButton
                  aria-label="disable"
                  onClick={() => handleDisable(index)}
                  disabled={!isAdmin || product.disabled}
                >
                  {!isAdmin || product.disabled ? <VisibilityOffIcon sx={{ color: isAdmin ? '#9a78a6' : 'disabled' }} /> : <Visibility sx={{ color: '#9a78a6' }} />}
                </IconButton>
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => handleDelete(index)}
                  disabled={!isAdmin}
                >
                  <DeleteIcon />
                </IconButton>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
