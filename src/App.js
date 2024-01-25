import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios'
import {DatePicker} from 'antd';

function App() {
  const countries = [
    {id:"1",name:"INDIA"},
    {id:"2",name:"USA"}
  ];

  const states = [
    {id:"1",countryId:"1",name:"Haryana"},
    {id:"2",countryId:"1",name:"Delhi"},
    {id:"3",countryId:"2",name:"Texas"},
    {id:"4",countryId:"2",name:"California"}
  ]

  const cities = [
    {id:"1",stateId:"1",name:"Faridabad"},
    {id:"2",stateId:"1",name:"Palwal"},
    {id:"3",stateId:"2",name:"Mandi House"},
    {id:"4",stateId:"2",name:"kalka Ji"},
    {id:"1",stateId:"3",name:"Houston"},
    {id:"2",stateId:"3",name:"Austin"},
    {id:"3",stateId:"4",name:"Los Angeles"},
    {id:"4",stateId:"4",name:"Son Diego"}
  ]

  const [country,setCountry] = useState([]);
  const [state,setStates] = useState([]);
  const [city,setCIty] = useState([]);


  useEffect(()=>{
    setCountry(countries);
    setStates(states);
    setCIty(cities);
  },[])

  const handleCountry = (id)=>{
    const statedata = states.filter(s=>s.countryId == id);
    setStates(statedata);
  }
  const handleState = (id)=>{
    const citydata = cities.filter(ct=>ct.stateId == id);
    setCIty(citydata);
  }

  
  return (
    <div className="App">
        <select id='ddlCountry' className='form-control select-class' onChange={(e)=>handleCountry(e.target.value)}>
          <option value='0'>Select Country</option>
          {
          country && country !== undefined ? country.map((ctr,index)=>{
            return(
              <option key={index} value={ctr.id}>{ctr.name}</option>
            )
          }): "Not Data found"
        }
        </select>
        <br/>
        <br/>
        <select id='ddlState' className='form-control select-class' onChange={(e)=>handleState(e.target.value)}>
          <option value='0'>Select Country</option>
          {
          state && state !== undefined ? state.map((std,index)=>{
            return(
              <option key={index} value={std.id}>{std.name}</option>
            )
          }): "Not Data found"
        }
        </select>
        <br/>
        <br/>
        <select id='ddlCity' className='form-control select-class' >
          <option value='0'>Select Country</option>
          {
          city && city !== undefined ? city.map((ctd,index)=>{
            return(
              <option key={index} value={ctd.id}>{ctd.name}</option>
            )
          }): "Not Data found"
        }
        </select>
        <br/>
        <br/>
        <DatePicker/>
    </div>
  );
}

export default App;
