import Guestbook from './components/Guestbook'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SelfPR from './components/SelfPR'
import Personal from "./components/Personal";
import InteractiveSimulator from "./components/reliability/InteractiveSimulator";
import ReliabilityProject from "./components/reliability/ReliabilityProject";

import Story from "./components/Story";

function App() {
  return (
    <>
      <>
  <Navbar />
  <Hero />
  <SelfPR />
  <InteractiveSimulator />
  <ReliabilityProject />
  <Personal />  
  <Story />
  
  <Guestbook />
</>
    </>
  )
}

export default App