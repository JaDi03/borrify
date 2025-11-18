import { useState } from 'react';
import './index.css';

function App() {
  const [score] = useState(75);
  const [currentChain, setCurrentChain] = useState('Arc Testnet');

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="w-full py-4 px-8 bg-gradient-to-b from-[#243e76] to-[#658bdd] shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
  <img 
    src="/logo.png" 
    alt="Borrify" 
    className="w-16 h-16 md:w-20 md:h-20"
  />
</div>

          <div className="flex items-center gap-4">
            <select
              value={currentChain}
              onChange={(e) => setCurrentChain(e.target.value)}
              className="px-3 py-2 bg-[#1e1e2e] text-white rounded-lg border border-[#444]"
            >
              <option>Arc Testnet</option>
              <option>Base Sepolia</option>
              <option>Arbitrum Sepolia</option>
            </select>

            <button className="bg-[#1ee82f] text-black font-bold px-4 py-2 rounded-lg">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-center text-3xl font-bold text-[#1ee82f] mb-10">
          Pools Overview
        </h2>

        {/* Sección de Pools con degradado de fondo */}
        <div className="flex flex-wrap justify-around gap-6 mb-10 relative p-6 rounded-3xl bg-gradient-to-b from-[#243e76] to-[#658bdd]">
          
          {/* Tarjeta Pool 1 */}
          <div className="relative w-80 p-6 rounded-2xl text-white shadow-lg bg-opacity-0">
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#1ee82f] to-[#00ffbf] -z-10"></div>
            <h3 className="text-xl font-semibold text-[#1ee82f] mb-2">USDC on Arc</h3>
            <p>TVL: $1M</p>
            <p>Supply APR: 4%</p>
            <p>Avg Score: 75</p>
          </div>

          {/* Tarjeta Pool 2 */}
          <div className="relative w-80 p-6 rounded-2xl text-white shadow-lg bg-opacity-0">
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#1ee82f] to-[#00ffbf] -z-10"></div>
            <h3 className="text-xl font-semibold text-[#1ee82f] mb-2">USDC on Base</h3>
            <p>TVL: $500K</p>
            <p>Supply APR: 3.5%</p>
            <p>Avg Score: 80</p>
          </div>

          {/* Tarjeta Pool 3 */}
          <div className="relative w-80 p-6 rounded-2xl text-white shadow-lg bg-opacity-0">
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#1ee82f] to-[#00ffbf] -z-10"></div>
            <h3 className="text-xl font-semibold text-[#1ee82f] mb-2">EURC on Arbitrum</h3>
            <p>TVL: $300K</p>
            <p>Supply APR: 4.5%</p>
            <p>Avg Score: 70</p>
          </div>
        </div>

        {/* Score Card */}
        <div className="max-w-md mx-auto relative p-8 rounded-2xl text-white shadow-lg bg-opacity-0">
          <div className="absolute inset-0 rounded-2xl p-[3px] bg-gradient-to-r from-[#1ee82f] to-[#00ffbf] -z-10"></div>
          <h2 className="text-2xl font-bold text-[#1ee82f] mb-4">Your Reputation Score</h2>
          <p className="text-6xl font-bold text-center text-[#1ee82f]">{score}/100</p>
          <p className="text-center mt-2 text-gray-700">
            Level: Medium — Borrow at low rates
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
