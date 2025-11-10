import React from 'react'
import AddItem from './pages/AddItem'
import ItemsBoard from './pages/ItemsBoard'

export default function App(){
  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <header className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-6'>EcoExchange</h1>
      </header>
      <main className='max-w-4xl mx-auto grid gap-6'>
        <AddItem />
        <ItemsBoard />
      </main>
    </div>
  )
}
