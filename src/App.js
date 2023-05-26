
import { useState } from 'react';
import './App.css';
import Footer from './components/common/footer';
import Header from './components/common/header';
import TabOptions from './components/common/tabOptions';
import Delivery from './components/delivery';
import DiningOut from './components/dining Out';
import NightLife from './components/night Life';

function App() {
  const [activeTab ,setActiveTab]= useState('Delivery')
  return (
    <div className="App">
     <Header/>
     <TabOptions activeTab={activeTab} setActiveTab ={setActiveTab} />
     {getCorrectScreen(activeTab)}
     <Footer/>
    </div>
  );
}
const getCorrectScreen=(tab)=>{
  switch(tab){
    case "Delivery":
      return <Delivery/>
    case "Dining Out":
      return <DiningOut/>
    case "NightLife":
      return <NightLife/>
    default :
      return <Delivery/>
  }
}

export default App;
