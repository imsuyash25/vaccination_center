import React from 'react';
import {useState} from 'react';
import validator from 'validator';
import './User.css';

function Login(props){
	const [user,setUser] = useState(
		{
			name:"",
			gmail:"",
			password:"",
		})
	const [varify,setUserVerify] = useState(
		{
			gmail:"",
			password:"",
		})
	const [Admin, setAdmin] = useState({
			name:"Suyash Asati",
			gmail:"asatisuyash@gmail.com",
			password:"suyash108",
		})
	function handleSignUp(event){
		event.preventDefault();
		if (!validator.isEmail(user.gmail)) {
			window.alert("Enter valid Gmail");
		}
		if(user.name==="" ) window.alert("Enter valid name");
		if(user.passwors==="") window.alert("enter valid password");
		if(validator.isEmail(user.gmail) && user.name !=="" && user.password !==""){
			localStorage.setItem('Name', user.name);
			localStorage.setItem('Gmail', user.gmail);
      		localStorage.setItem('Password',user.password);
			props.onsetlogin2(false);
			props.onsetlogin(true);
			props.onsetWel(true);
			props.onusername(user.name);
		}
	}
	function handleAdmin(event){
		event.preventDefault();
		if(varify.gmail==="") window.alert("Enter Gmail");
		if(varify.password==="") window.alert("Enter password");
		if(varify.gmail !== Admin.gmail) window.alert("Enter correct gmail");
		if(varify.password !== Admin.password) window.alert("Enter correct password");
		else if(varify.password === Admin.password && varify.gmail=== Admin.gmail){
			props.onsetlogin2(false);
			props.onsetlogin(true);
			props.onAdmin(true);
		}
	}
	function handleLogin(event){
		event.preventDefault();
		if(varify.gmail==="") window.alert("Enter Gmail")
		if(varify.password==="")window.alert("Enter password");
		if(varify.gmail !==localStorage.getItem('Gmail')) window.alert("Enter correct gmail");
		if(varify.password !== localStorage.getItem('Password')) window.alert("Enter correct password");
		else if(varify.password===localStorage.getItem('Password') && varify.gmail===localStorage.getItem('Gmail')){
			props.onsetlogin2(false);
			props.onsetlogin(true);
			props.onsetWel(true);
			props.onusername(localStorage.getItem('Name'));
		}
	}

    return(
    <body className="body2">
	<div className="main">  	
		<input className="input2" type="checkbox" id="chk" aria-hidden="true"/>
			<div className="signup">
				<form>
					<label className="label2" for="chk" aria-hidden="true">Sign up</label>
					<input className="input2" type="text" value={user.name} placeholder="User name" required="" 
					onChange={(e)=>setUser({...user,name:e.target.value})}/>

					<input className="input2" type="email" value={user.email} placeholder="Email" required=""
					onChange={(e)=>setUser({...user,gmail:e.target.value})}/>

					<input className="input2" type="password" value={user.password} placeholder="Password" required=""
					onChange={(e)=>setUser({...user, password:e.target.value})}/>
					<button className="button2" onClick={handleSignUp}>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label className="label2" for="chk" aria-hidden="true">Login</label>
					<input className="input2" type="email"  value={varify.gmail} placeholder="Email" required=""
					onChange={(e)=>setUserVerify({...varify, gmail: e.target.value})} />

					<input className="input2" type="password" name="pswd" value= {varify.password} 
					onChange={(e)=>setUserVerify({...varify, password: e.target.value})} placeholder="Password" required=""/>
					<button className="button2" onClick={handleLogin}>User</button>
					<button className="button2" onClick={handleAdmin}>Admin</button>
				</form>
			</div>
	</div>
    </body>
    )
}

export default Login;