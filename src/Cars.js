import React from 'react';
import ReactDOM from 'react-dom/client';

const cars = [
  {
    id: 1,
    name: "Bugatti Chiron",
    brand: "Bugatti",
    price: 3000000,
    topSpeed: "261 mph",
    acceleration: "0-60 mph in 2.4s",
    power: "1,479 hp",
    transmission: "7-speed DSG",
    details: "Limited production hypercar with quad-turbocharged W16 engine",
    photo: "bughatti.jpeg" // Add photo link here
  },
  {
    id: 2,
    name: "Ferrari SF90 Stradale",
    brand: "Ferrari",
    price: 625000,
    topSpeed: "211 mph",
    acceleration: "0-60 mph in 2.5s",
    power: "986 hp",
    transmission: "8-speed dual-clutch",
    details: "Plug-in hybrid supercar with advanced aerodynamics",
    photo: "ferari.jpeg" // Add photo link here
  },
  {
    id: 3,
    name: "Jeep Wrangler Rubicon",
    brand: "Jeep",
    price: 42000,
    topSpeed: "112 mph",
    acceleration: "0-60 mph in 6.7s",
    power: "285 hp",
    transmission: "8-speed automatic",
    details: "Iconic off-road SUV with advanced 4x4 capability",
    photo: "jeep.jpeg" // Add photo link here
  },
  {
    id: 4,
    name: "Lamborghini Aventador",
    brand: "Lamborghini",
    price: 417826,
    topSpeed: "217 mph",
    acceleration: "0-60 mph in 2.8s",
    power: "769 hp",
    transmission: "7-speed automated manual",
    details: "V12-powered flagship supercar with scissor doors",
    photo: "lambo.jpeg" // Add photo link here
  },
  {
    id: 5,
    name: "McLaren P1",
    brand: "McLaren",
    price: 1150000,
    topSpeed: "217 mph",
    acceleration: "0-60 mph in 2.8s",
    power: "903 hp",
    transmission: "7-speed dual-clutch",
    details: "Hybrid hypercar with active aerodynamics",
    photo: "mclaren.jpeg" // Add photo link here
  },
  {
    id: 6,
    name: "Mercedes-AMG GT Black Series",
    brand: "Mercedes-Benz",
    price: 325000,
    topSpeed: "202 mph",
    acceleration: "0-60 mph in 3.1s",
    power: "720 hp",
    transmission: "7-speed dual-clutch",
    details: "Track-focused sports car with flat-plane V8",
    photo: "mercedes.jpeg" // Add photo link here
  }
];

function Cars({ car }) {
  return (
    <div className="carsContainer" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }}>
      <img 
        src={car.photo} 
        alt={car.name} 
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }} 
      />
      <div className="carDetails" style={{ marginTop: '10px' }}>
        <h2>{car.name}</h2>
        <p><strong>Brand:</strong> {car.brand}</p>
        <p><strong>Price:</strong> ${car.price.toLocaleString()}</p>
        <p><strong>Top Speed:</strong> {car.topSpeed}</p>
        <p><strong>Acceleration:</strong> {car.acceleration}</p>
        <p><strong>Power:</strong> {car.power}</p>
        <p><strong>Transmission:</strong> {car.transmission}</p>
        <p><strong>Details:</strong> {car.details}</p>
      </div>
    </div>
  );
}

function CarsList() {
  return (
    <div>
      <h1>Car Collection</h1>
      {cars.map((car) => (
        <Cars key={car.id} car={car} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CarsList />);
