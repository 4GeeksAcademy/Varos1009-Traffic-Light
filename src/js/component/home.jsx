import React from "react";
import { useState } from "react";



const TrafficLight = () => {
	const [ color, setColor ] = useState('red');
	
	return (
		<div className="trafficLighter">
			<div className="hangon"></div>
		<div className="box">
			<div
			onClick={()=>setColor('red')} 
			className={"light red " + (color==='red' ? 'glow':'')}></div>
			<div 
			onClick={()=>setColor('yellow')}
			className={"light yellow " + (color==='yellow'?'glow':'')}></div>
			<div
			onClick={()=>setColor('green')} 
			className={"light green " + (color==='green'?'glow':'')}></div>
		</div>
		</div>
		
	);
};

export default TrafficLight;
