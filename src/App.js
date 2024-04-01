import React, { useEffect, useState } from 'react';
import './App.css';
import Web3 from 'web3';
import PortfolioContract from './contracts/Portfolio.json';
import Navbar from './Navbar'; // Import komponen Navbar
import background1 from './background_cover.JPG'; // Background foto untuk section 1

function App() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [portfolioName, setPortfolioName] = useState('');
  const [projects, setProjects] = useState([]);

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

    // async function loadProjects() {
    //   // Load projects from your database or API
    //   const projectsData = await fetch('https://example.com/projects');
    //   const projectsJson = await projectsData.json();
    //   setProjects(projectsJson);
    // }

    loadWeb3();
    loadBlockchainData();
    // loadProjects();
  }, [web3]);

  return (
    <div className="App">
      <Navbar /> {/* Tambahkan navbar di atas header */}

      {/* Section 1 dengan background foto */}
      <section style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: '50% 30%', height:'100vh' }}>
        <header className="App-header">
          <h1>Welcome to My Blockchain Portfolio</h1>
          <p>{portfolioName ? `Portfolio Name: ${portfolioName}` : 'Loading...'}</p>
        </header>
      </section>

      {/* Section 2 dengan latar belakang putih */}
      <section style={{ backgroundColor: '#fff',color:'#000', padding: '50px 0', minHeight: '100vh' }}>
        <h2>Section 2</h2>
        {/* Isi dari section 2 */}
      </section>

      {/* Section 3 dengan background hitam */}
      <section style={{ backgroundColor: '#000', padding: '50px 0', minHeight: '100vh' }}>
        <h2>Section 3</h2>
        {/* Isi dari section 2 */}
      </section>

    </div>
  );
}

export default App;
