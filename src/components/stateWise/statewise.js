import React,{useState,useEffect} from 'react';
import india_logo from './india-logo.png';
import './statewise.css';

function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
 }
}
const Statewise = () => {
    
    const [data,setData] = useState([]);
    
    const getCovidData=async()=>{
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData.statewise);
    }
    
    useEffect(() =>{
    getCovidData();
    },[])   
    return(
           <>
               <div className="container-fluid">
                   <div className="main-heading">
                       <div className="text-center text-white">COVID-19  
                       <span>
                           <img src={india_logo} alt="india logo" id="logo"/>
                       </span>
                         Dashboard</div>
                   </div>
                   <div className="table-responsive">
                       <table className="table table-hover">
                            <thead className="table-dark text-white">
                                <tr>
                                    <th> State</th>
                                    <th> Confirmed</th>
                                    <th> Recovered</th>
                                    <th> Deaths</th>
                                    <th> Active</th>
                                    <th> Updated</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                   data.map((curEle,index)=>{
                                       return(
                                           <>
                                           <tr key={index}>
                                              <td className="state-css"> {curEle.state}</td>
                                              <td className="confirmed-css text-center"> 
                                                   {numFormatter(curEle.confirmed)}
                                                    <span className="arrows">
                                                      <i className="fas fa-arrow-up" style={{'color':'red'}}></i>
                                                    </span>
                                              </td>
                                              <td className="recovered-css text-center"> 
                                                {numFormatter(curEle.recovered)}
                                                <span className="arrows"> 
                                                   <i className="fas fa-arrow-down" style={{'color':'rgb(0, 255, 64)'}}></i>
                                                 </span>
                                              </td>
                                              <td className="deaths-css text-center"> {numFormatter(curEle.deaths)}</td>
                                              <td className="active-css text-center"> {numFormatter(curEle.active)}</td>
                                              <td> {curEle.lastupdatedtime}</td>
                                           </tr>
                                           </>
                                       )
                                   })
                               }
                            </tbody>
                       </table>
                   </div>
               </div>
               <footer className="footer text-center text-white">
                   <p>Made With ❤️ By Sarwar</p>
               </footer>
           </>
       )
 }

 export default Statewise;