import React from 'react';
import './App.css';

function App() {
  const motorcycles = [
    {
      id: 1,
      name: 'Yamaha Fazzio hybrid-connection',
      image: 'https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023020308195019595T39833.png',
      description: 'Mesin Blue Core 125cc generasi terbaru yang memberikan pengalaman berkendara lebih bertenaga, ramah lingkungan dan handal. Dilengkapi dengan Electric Power Assist Start yang membuat akselerasi awal lebih bertenaga dan halus khususnya di tanjakan dan saat berboncengan. ',
      price: 'Rp.22.700.000'
    },
    {
      id: 2,
      name: 'Honda Scoopy New',
      image: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/58/2024/04/12/All-New-Honda-Scoopy-2024-1854085116.jpg',
      description: 'Honda Scoopy terbaru menggunakan mesin berkapasitas 110cc, berpendingin udara, dengan konfigurasi satu silinder dan sistem SOHC (Single Overhead Camshaft). Mesin ini dilengkapi dengan teknologi PGM-FI (Programmed Fuel Injection) dari Honda, yang meningkatkan efisiensi bahan bakar dan kinerja mesin.',
      price: 'Rp.22.350.000'
    },
    {
      id: 3,
      name: 'Vespa Primavera 150 I-GET ABS ',
      image: 'https://posmetro.co/wp-content/uploads/2022/11/images-4.jpeg',
      description: 'Keunggulan dari Primavera I-GET ABS ini yaitu menghadirkan bagasi yang cukup besar di bawah joknya, sehingga Anda dapat meletakan helm, jas hujan dan perlengkapan lainnya. Vespa Primavera 150 I-GET ABS tetap menggendong mesin satu silinder berkapasitas 150 cc dengan teknologi I-GET yang mampu menciptakan getaran lebih halus dan akseslerasi lebih baik.',
      price: 'Rp.60.000.000'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Motorcycle Sales</h1>
      </header>
      <main>
        <div className="motorcycle-list">
          {motorcycles.map(motorcycle => (
            <div key={motorcycle.id} className="motorcycle">
              <img src={motorcycle.image} alt={motorcycle.name} className="motorcycle-image" />
              <h2>{motorcycle.name}</h2>
              <p>{motorcycle.description}</p>
              <p className="motorcycle-price">{motorcycle.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
