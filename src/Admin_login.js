import React from 'react';
import ShowDose from './show_doses.js';
import {useState} from 'react';
import './home.css';

function Admin(props){
    const [addc, setAddc] = useState(false);
    const [centername, setCentername] = useState('')
    const [vacslot,setVacslot] = useState(0);
    function handleAdd(event){
        event.preventDefault();
        setAddc(false);
        const insertAt = 1; 
        if(centername ==='' || vacslot===0) window.alert("Enter Correct Details")
        if(centername !=='' && vacslot>0){
            const nextCenter = [
        
        ...props.center.slice(0, insertAt),
        
        { Center: centername , Available_Slots: vacslot, Slots:30},
       
        ...props.center.slice(insertAt)
        ];
        const nextCenter2 = [
            
            ...props.today_2.slice(0, insertAt),
           
            { Center: centername ,  Slots:10},
    
            ...props.today_2.slice(insertAt)
            ];
        props.oncenter(nextCenter);
        props.ontoday(nextCenter2);
        props.ontom(nextCenter2);
        props.onparso(nextCenter2);
        setCentername('');
        setVacslot(0);
        }
        
    }

    return(
        <>
        <button onClick= {(e)=>setAddc(!addc)} className="Addcenter">Add Center</button>
        {
            addc?  //// Show Add Center
            <form>
                <input className="input2" type="text" value={centername} placeholder="Enter Center Name" required="" 
					onChange={(e)=>setCentername(e.target.value)}/>
                <input className="input2" type="number" value={vacslot} placeholder="Enter Vaccine Slots" required="" 
					onChange={(e)=>setVacslot(e.target.value)}/>    
                <button className="button3" onClick={handleAdd}>Add</button>
            </form>
            :null
        }
        <ul className="schedule">
           { props.center.map((item,index)=> {
                return(
                    <ShowDose id = {index} thiscenter = {props.center} dltcenter={props.oncenter} key={index} data={item} />
                )
            })
            }   
        </ul>
        </>

    )
}
export default Admin;