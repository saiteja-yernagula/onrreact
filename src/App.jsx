import Navbar from './components/Navbar'
import './components/styles.css'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
function App() {
 
  return (
   <div>
    <Navbar/>
    <Section/>

    <div className="doctorparent">
    <Doctorcard name='John' specialization='Heart' gender='Male'/> 
    <Doctorcard name='Sivaram' specialization='Ortho' gender='Male'/> 
    <Doctorcard name='Teja' specialization='Muscles' gender='Male'/> 
    <Doctorcard name='Vasavi' specialization='psycho' gender='FeMale'/> 
    <Doctorcard name='Madhu' specialization='Neuro' gender='Male'/> 
  
    </div>

    {/* <Addnewdoctor/> */}


   </div>
  )
}

export default App