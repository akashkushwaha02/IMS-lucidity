import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../redux/inventorySlice';
import { Modal, Box, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EditProductModal = ({ index, onClose }) => {
  const product = useSelector((state) => state.inventory.products[index]);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    dispatch(updateProduct({ index, updatedProduct: formData }));
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: '#292b27',
          p: 4,
          borderRadius: 2,
        }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
        }}><h2>Edit Product</h2>
          <IconButton
            aria-label="delete"
            color="white"
            onClick={onClose}
            className='widget-icon'
          >
            <CloseIcon sx={{ color: '#d5f552' }} />
          </IconButton> </Box>
        <TextField
          className='edit-product-modal-input'
          fullWidth
          variant='filled'
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          className='edit-product-modal-input'
          fullWidth
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          className='edit-product-modal-input'
          fullWidth
          label="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          className='edit-product-modal-input'
          fullWidth
          label="Quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          margin="normal"
        />

        <Box sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          gap: 2,
          color: '#d5f552'
        }}>
          <Button variant="contained" color="#d5f552" onClick={handleSave} sx={{ mt: 2 }}>
            Save
          </Button>
          <Button color="#d5f552" onClick={onClose} sx={{ mt: 2 }}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditProductModal;
