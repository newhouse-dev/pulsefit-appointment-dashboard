import { useState } from 'react'

import PulseFitLogo from './assets/PulseFitLogo.png';
import Header from './components/Header'
import Dashboard from './components/Dashboard';
import { MockTrainers } from './data/mocktrainers';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header logo={PulseFitLogo} user='Kevin' logoUrl='/' />
      <Dashboard trainerData={MockTrainers} headerText='Book a visit' descriptionText='Choose a date to see available times.' />
    </>
  )
}

export default App
