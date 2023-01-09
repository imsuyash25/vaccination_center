import React from 'react';
import './home.css';

function Schedule(props){
        const {data} = props;
          
return(
    <li className='list_vac'>
    <div className="Center">Center: {  data.Center}</div>
    <div className="Slots">Available Slots: {data.Slots}</div>
    <button className="bookslot" onClick = {()=> props.onbook(props.data)}>Booked</button>
    </li>
    )
}
export default Schedule;