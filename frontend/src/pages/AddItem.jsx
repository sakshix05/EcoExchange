import React, { useState } from 'react'
import axios from 'axios'

export default function AddItem(){
  const [form, setForm] = useState({ name:'', image:'', condition:'', location:'', description:'' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(import.meta.env.VITE_API_URL + '/items', form);
      alert('Item added!');
      setForm({ name:'', image:'', condition:'', location:'', description:'' });
    } catch (err){
      alert('Error adding item');
    }
    setLoading(false);
  }

  return (
    <div className='bg-white p-4 rounded shadow'>
      <h2 className='text-xl font-semibold mb-3'>Add Item</h2>
      <form onSubmit={handleSubmit} className='grid gap-2'>
        <input name='name' value={form.name} onChange={handleChange} placeholder='Name' className='p-2 border rounded' required />
        <input name='image' value={form.image} onChange={handleChange} placeholder='Image URL (optional)' className='p-2 border rounded' />
        <input name='condition' value={form.condition} onChange={handleChange} placeholder='Condition (e.g., Good, Like New)' className='p-2 border rounded' />
        <input name='location' value={form.location} onChange={handleChange} placeholder='Location' className='p-2 border rounded' />
        <textarea name='description' value={form.description} onChange={handleChange} placeholder='Description' className='p-2 border rounded' />
        <button type='submit' className='bg-green-600 text-white p-2 rounded' disabled={loading}>{loading ? 'Adding...' : 'Add Item'}</button>
      </form>
    </div>
  )
}
