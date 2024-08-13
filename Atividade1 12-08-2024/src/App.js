import React from 'react';
import skinAhri from './skinahri.jpeg';

function Profile() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <img
        src={skinAhri}
        alt="Ahri League Of Legends"
        style={{ width: '450px', height: 'auto' }}
      />
      <p>Ahri - A Raposa de Nove Caudas</p> {/* Texto descritivo */}
    </div>
  );
}

function Gallery() {
  return (
    <section>
      <h1>Melhor Campeã do League Of Legends</h1>
      <Profile />
      <hr />
      <Profile />
      <hr />
      <Profile />
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Gallery />
    </div>
  );
}

export default App;
