import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Events, animateScroll as scroll } from 'react-scroll';
import './App.css';
import Web3 from 'web3';
import PortfolioContract from './contracts/Portfolio.json';
import Navbar from './Navbar'; // Import komponen Navbar
import ethereumLogo from './logo_load.png'; // Logo Ethereum
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';

function App() {
  const sectionRef = useRef(null);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [portfolioName, setPortfolioName] = useState('');
  const [isLoading, setIsLoading] = useState(true); // State untuk loading

  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          setWeb3(web3);
        } catch (error) {
          console.error('User denied account access');
        }
      } else if (window.web3) {
        const web3 = new Web3(window.web3.currentProvider);
        setWeb3(web3);
      } else {
        console.error('Non-Ethereum browser detected');
      }
    }

    async function loadBlockchainData() {
      if (!web3) return;
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = PortfolioContract.networks[networkId];
      const contractInstance = new web3.eth.Contract(
        PortfolioContract.abi,
        deployedNetwork && deployedNetwork.address
      );
      setContract(contractInstance);
      const name = await contractInstance.methods.getPortfolioName().call();
      setPortfolioName(name);
    }

    loadWeb3();
    loadBlockchainData();

    // Simulasi waktu loading dengan setTimeout
    setTimeout(() => {
      setIsLoading(false); // Setelah beberapa detik, loading selesai
    }, 3000); // Ganti 3000 dengan durasi loading yang Anda inginkan (dalam milidetik)
  }, [web3]);

  return (
    <div className="App">
      {isLoading ? ( // Tampilkan animasi loading jika isLoading true
        <div className="loading">
          <img src={ethereumLogo} alt="Ethereum Logo" className="ethereum-logo" />
        </div>
      ) : (
        <>
          <Navbar /> {/* Tambahkan navbar di atas header */}
           <Home ref={sectionRef} portfolioName={portfolioName} />
          <Work />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}


export default App;
