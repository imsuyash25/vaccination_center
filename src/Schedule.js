import React from 'react';
import './home.css';
import {useState} from 'react';
function Schedule(props){
        const {data} = props;
        const [unbook,setunbook] = useState(false);
return(
    <li className='list_vac'>
    <div className="Center">Center: {data.Center}</div>
    <div className="Slots">Available Slots: {data.Slots}</div>
    {(unbook)? <button className="bookslot" onClick = {()=> props.onbook(props.data,unbook,setunbook)}>Booked</button>
        :<button className="bookslot" onClick = {()=> props.onbook(props.data,unbook,setunbook)}>Book</button>
    }
    </li>
    )
}
export default Schedule;