import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ItemsBoard(){
  const [items, setItems] = useState([]);
  const [q, setQ] = useState('');

  const fetchItems = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_API_URL + '/items');
      setItems(res.data);
    } catch (err){
      console.error(err);
    }
  }

  useEffect(()=>{ fetchItems(); }, []);

  const toggleStatus = async (id, status) => {
    try {
      await axios.put(import.meta.env.VITE_API_URL + `/items/${id}`, { status: status === 'available' ? 'exchanged' : 'available' });
      fetchItems();
    } catch (err){ console.error(err); }
  }

  const filtered = items.filter(it => it.name.toLowerCase().includes(q.toLowerCase()) || (it.location || '').toLowerCase().includes(q.toLowerCase()))

  return (
    <div className='bg-white p-4 rounded shadow'>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='text-xl font-semibold'>Items Board</h2>
        <input placeholder='Search by name or location' value={q} onChange={e=>setQ(e.target.value)} className='p-2 border rounded' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {filtered.map(item => (
          <div key={item._id} className='p-3 border rounded'>
            {item.image ? <img src={item.image} alt={item.name} className='h-36 w-full object-cover rounded'/> : <div className='h-36 w-full bg-gray-200 rounded flex items-center justify-center'>No Image</div>}
            <h3 className='mt-2 text-lg font-semibold'>{item.name}</h3>
            <p className='text-sm'>{item.condition} • {item.location}</p>
            <p className='text-sm mt-1'>{item.description}</p>
            <div className='mt-2 flex gap-2'>
              <button onClick={()=>toggleStatus(item._id, item.status)} className={`px-2 py-1 rounded ${item.status==='available' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
                {item.status === 'available' ? 'Mark as Exchanged' : 'Available'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
