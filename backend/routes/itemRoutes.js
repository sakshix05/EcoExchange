import express from 'express';
import Item from '../models/itemModel.js';

const router = express.Router();

// POST /api/items - add new item
router.post('/', async (req,res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/items - fetch all items
router.get('/', async (req,res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/items/:id - update item (e.g., status toggle)
router.put('/:id', async (req,res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
