import { useEffect,useState } from "react"
import Doctorcard from './Doctorcard'
import axios from "axios"
function Home({newdoctor,deletedata,updatedata}) {
  const [doctors,setDoctors]=useState([])

  const [search,setSearch]=useState("")
  const [specialization,setSpecialization]=useState('')
  async function fetchdata(){

    let response=await axios.get('https://doc-back.onrender.com/doctors')
    
   setDoctors(response.data)
  }
  
  useEffect(()=>{
    // if(newdoctor){
    //   setDoctors(prev=>[...prev,newdoctor])
    // }
 fetchdata()
  },[newdoctor])

 

  const filteredarray=doctors.filter((val)=>{
    return (
    val.name.toLowerCase().includes(search.toLowerCase())
    &&
    (specialization=="" || val.specialization==specialization)
    )
  })
  
  return (
    <div>
    <div className='filters'>
    <input value={search}  onChange={(e)=>setSearch(e.target.value)} type="text" className='text-field' placeholder='search your doctor' />
    <select value={specialization} onChange={(e)=>setSpecialization(e.target.value)} name="" id="">
      <option value="">Select specialization</option>
      <option value="Bones">bones</option>
      <option value="Heart">heart</option>
      <option value="Muscles">muscles</option>
    </select>
    </div>
    <div className='doctorparent'>
     {filteredarray.length>0? (filteredarray.map((doctor)=>{
        return (
          <Doctorcard updatedata={updatedata} deletedata={deletedata} key={doctor.id} id={doctor.id} name={doctor.name} gender={doctor.gender} specialization={doctor.specialization}/>
        )
      })): <h1>No Doctors Found</h1>}
    </div>
    </div>
  )
}

export default Home