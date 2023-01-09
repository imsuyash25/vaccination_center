import React from 'react';
import {useState} from 'react';
import './App.css';
import './home.css';
import Navbar from './Navbar.js';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 
import Schedule from './Schedule.js';
import Login from './Login.js';
import Admin from './Admin_login.js';
import {firestore} from './firebase';
import { addDoc, collection} from '@firebase/firestore';
function App() {
  const [vacc,setVacc] = useState(false);
  const [welcome,setWel] = useState(false);
  const [country, setCont] = useState('');
  const [states, setStat] = useState('');
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [todate, setTodate] = useState(new Date());
  const [Login_succ,setLogin] = useState(false);
  const [login,setlogin] = useState(true);
  const [adminlogin,setadminlogin] = useState(false);
  const [show_cart,setShowcart] = useState(true);
  const [user_name,setUsername] = useState("");
  const [show_today,setShow_today] = useState({
    today:false,
    tommarow:false,
    next:false,
  });

  const [slot_details, setUserSlot] = useState({
    User_Name:"",
    User_Gmail:"",
    Booked_Center:"",
    Booked_Date:"",
  })

  
  const [today, setToday] = useState([
    {
      Center:"Bal Bharti School",
      Slots: 10,
    },
    {
      Center:"Vidya Mandir Vidhyalay",
      Slots: 10,
    },
    {
      Center:"City Hospital",
      Slots: 10,
    },
    {
      Center:"Life Medicity Hospital",
      Slots: 10,
    },
    {
      Center:"Smart Minded School",
      Slots: 10,
    },
    {
      Center:"Life Care hospital",
      Slots: 10,
    },
    {
      Center:"Akhash Institution of pharmacy",
      Slots: 10,
    },
    {
      Center:"Public health Care Clinic",
      Slots: 10,
    },     
]);

  const [tomarrow,setTom] = useState(
    [
      {
        Center:"Bal Bharti School",
        Slots: 10,
      },
      {
        Center:"Vidya Mandir Vidhyalay",
        Slots: 10,
      },
      {
        Center:"City Hospital",
        Slots: 10,
      },
      {
        Center:"Life Medicity Hospital",
        Slots: 10,
      },
      {
        Center:"Smart Minded School",
        Slots: 10,
      },
      {
        Center:"Life Care hospital",
        Slots: 10,
      },
      {
        Center:"Akhash Institution of pharmacy",
        Slots: 10,
      },
      {
        Center:"Public health Care Clinic",
        Slots: 10,
      },     
  ]);

  const [aftertom,setaftertom] = useState([
  {
    Center:"Bal Bharti School",
    Slots: 10,
  },
  {
    Center:"Vidya Mandir Vidhyalay",
    Slots: 10,
  },
  {
    Center:"City Hospital",
    Slots: 10,
  },
  {
    Center:"Life Medicity Hospital",
    Slots: 10,
  },
  {
    Center:"Smart Minded School",
    Slots: 10,
  },
  {
    Center:"Life Care hospital",
    Slots: 10,
  },
  {
    Center:"Akhash Institution of pharmacy",
    Slots: 10,
  },
  {
    Center:"Public health Care Clinic",
    Slots: 10,
  },     
])
const [Center,setCenter] = useState([
  {
      Center:"Bal Bharti School",
      Slots: 30,
      Available_Slots:30,
    },
    {
      Center:"Vidya Mandir Vidhyalay",
      Slots: 30,
      Available_Slots:30,
    },
    {
      Center:"City Hospital",
      Slots: 30,
      Available_Slots:30,
    },
    {
      Center:"Life Medicity Hospital",
      Slots: 30,
      Available_Slots:30,
    },
    {
      Center:"Smart Minded School",
      Slots: 30,
      Available_Slots:30,
    },
    {
      Center:"Life Care hospital",
      Slots: 30,
      Available_Slots:30,
    },
    {
      Center:"Akhash Institution of pharmacy",
      Slots: 30,
      Available_Slots:30,
    },
    {
      Center:"Public health Care Clinic",
      Slots: 30,
      Available_Slots:30,
    },
  ])
function GetForm(){
    setVacc(!vacc); 
  }
const handlebook=(data)=>{
    let number = today.indexOf(data);
    show_today.today && setToday(today.map((item,index)=>index===number && item.Slots!==0 ? {...item, Slots:item.Slots-1 }:{...item}))
    show_today.tommarow && setTom(tomarrow.map((item,index)=>index===number && item.Slots!==0 ? {...item, Slots:item.Slots-1 }:{...item}));
    show_today.next && setaftertom(aftertom.map((item,index)=>index===number && item.Slots!==0? {...item, Slots:item.Slots-1 }:{...item}));
    setCenter(Center.map((item,index)=> index===number? {...item,Available_Slots:item.Available_Slots-1 }:{...item}));
    if(data.Slots>0) {
      setUserSlot({...slot_details, User_Name:localStorage.getItem('Name'),
      User_Gmail:localStorage.getItem('Gmail'), Booked_Center: data.Center, Booked_Date:startDate.toLocaleDateString()})
      const ref = collection(firestore,"Booked Slots");
      addDoc(ref,slot_details);
      setUserSlot({User_Name:"",
      User_Gmail:"",
      Booked_Center:"",
      Booked_Date:"",})
    }
    if(data.Slots === 0) alert("No Slots Available");
  }
function handlecity(event){
    setStat(event.target.value);
    console.log(states);
  }
function handleSubmit(event){
    event.preventDefault();
    setShowcart(true);
    let previous = new Date();
    previous.setDate(previous.getDate()+1);
    let day_after = new Date();
    day_after.setDate(day_after.getDate()+2);
    if(states==='') window.alert("Please Select State");
    else if(city==='') window.alert("Please Select City");
    else if(startDate.toLocaleDateString()=== todate.toLocaleDateString()) setShow_today({...show_today,today:true,tommarow:false,next:false});
    else if (previous.toLocaleDateString()=== startDate.toLocaleDateString()) setShow_today({...show_today,tommarow:true,today:false,next:false});
    else if (day_after.toLocaleDateString() === startDate.toLocaleDateString())
      setShow_today({...show_today,tommarow:false,today:false,next:true});
    else{
      setShow_today({...show_today,today:false,tommarow:false,next:false});
      setShow_today({...show_today,tommarow:false,today:false,next:false});
      setShow_today({...show_today,tommarow:false,today:false,next:false});
      window.alert("No Center is availbale for give Date");
      return;
    }
  }

  return (
    <div className="App">
      {login?<Login onusername = {setUsername} onAdmin ={setadminlogin} onsetlogin={setLogin}  onsetWel={setWel} onsetlogin2={setlogin}/>:null}
      {Login_succ? <Navbar onsetShow = {setShowcart} Username = {user_name} onadminlogin={adminlogin}
       onAdmin ={setadminlogin} onsetlogin={setLogin}  onsetWel={setWel} onsetlogin2={setlogin} />:null}
      {adminlogin? <Admin  oncenter = {setCenter} today_2={today} ontoday = {setToday} onaftertom={setaftertom} ontom = {setTom} center={Center} /> :null}
      {welcome? <div className="Cart-Vac">
          <div className="cart-welcome">Welcome </div>
          <div className="Find-Vac">Find vaccination center</div>
          <button style={{padding:10, fontsize:15}} onClick={GetForm}>Get Started</button>
          {
            vacc? 
            <div className="covid_form">
            <p>*Please fill below Information</p>
            <form className="form" onSubmit={handleSubmit}>
                    <label> Select Country:      
                    <select value={country} onChange={(e) => setCont(e.target.value)}>
                    <option value="India">India</option>
                    </select>
                    </label>
                    <br/>
                    <br/>
                    <label>Select State:
                        <input list="State" name="myStater" onChange={handlecity} />  
                    </label>     
                    <datalist id="State">
                        <option value="Madhya Pradesh" />
                        <option value="Haryana" />
                        <option value="Uttar Pradesh" />
                        <option value="Rajasthan" />
                        <option value="Delhi" />
                        <option value="Punjab" />   
                    </datalist>
                    <br/>
                    <br/>
                    <label>Select City:
                        <input list="City" name="mycity" onChange={(e)=>setCity(e.target.value)} />  
                    </label> 
                    <br/>
                    <br/> 
                    <label>Select date:
                    <DatePicker selected={startDate} onChange={(date) =>   
                    setStartDate(date)} dateFormat="dd/MM/yyyy" />
                    </label>
                    <br/>
                    <br/>
                  <input style={{padding:10, fontsize:15}} type="Submit" /> 
            </form>
            </div>
            :null
          }      
      </div>
      : null
      }
      {!adminlogin && show_cart && show_today.today? <ul className="schedule">
        {today.map((item,index)=> {
          return(
              <Schedule key = {index} 
                  data= {item}
                  onbook = {handlebook}
                  date = {startDate}
              />
          )
        })
        }
      </ul>
      :null
      }
      {!adminlogin && show_cart && show_today.tommarow? <ul className="schedule">
        
        {tomarrow.map((item,index)=> {
          return(
              <Schedule key = {index} 
                  data= {item}
                  onbook = {handlebook}
                  date={startDate}
              />
          )
        })
        }
      </ul>
      :null
      }
      {!adminlogin && show_cart && show_today.next? <ul className="schedule">
        {aftertom.map((item,index)=> {
          
          return(
              <Schedule key = {index} 
                  data= {item}
                  onbook = {handlebook}
                  date = {startDate}
              />
          )
        })
        }
      </ul>
      :null
      }
    
    </div>
  );
}
export default App;
