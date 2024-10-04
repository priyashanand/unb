import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Advance Dental Health Plan</h1>
        <p className="mt-4 text-lg">Dental care worth ₹8,000/- only at ₹550/-</p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded">Buy Now</button>
      </header>

      {/* Statistics Section */}
      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold">450+ World Class Clinics</h2>
        <p className="mt-2">Managed by 1200+ Square Specialists</p>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold">King's Dentistry</h3>
        </div>
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold">Invisalign</h3>
        </div>
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold">Wooden Tooth</h3>
        </div>
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold">Braces & Clips</h3>
        </div>
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold">Dentures</h3>
        </div>
        {/* Add more services as needed */}
      </section>

      {/* Safety Protocols */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-center">10x Safety Protocols</h2>
        <p className="text-center">Expert Guidance for Healthy Smiles</p>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center">In their Own Words</h2>
        <div className="flex justify-around mt-6">
          <div className="border p-4 rounded shadow">
            <p>⭐⭐⭐⭐⭐</p>
            <p>Happy Patient</p>
          </div>
          <div className="border p-4 rounded shadow">
            <p>⭐⭐⭐⭐⭐</p>
            <p>Another Happy Patient</p>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center">
        <p className="mb-2">250+ Corporate Trust Us</p>
        <div className="flex justify-center">
          <img src="path/to/bata-logo.png" alt="Bata" className="h-12 mx-2" />
          <img src="path/to/lakme-logo.png" alt="Lakme" className="h-12 mx-2" />
          {/* Add more logos as needed */}
        </div>
        <p className="mt-4">© 2024 Clove Dental. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
