import React from "react";

import Titles from "./components/Titles";

import Weather from "./components/Weather";

const API_KEY = "9fc5b37fc3596fd9e994736495214f66";

class Form extends React.Component{
  render(){
    return(


  <form onSubmit={this.props.getWeather}>
    <input type="text"  name="city1" placeholder="City..."/>
    <input type="text" name="country" placeholder="Country..."/>
    <button>Get Weather</button>
   
     

  </form>
  );
  }
};

class App extends React.Component {
  state = {
   
  }


  getWeather = async (e) => {
    e.preventDefault();
    
   var city = e.target.elements.city1.value;
   
   const country = e.target.elements.country.value;

    const api_call = await fetch(
'https://api.openweathermap.org/data/2.5/weather?q=London,${country}&appid=9fc5b37fc3596fd9e994736495214f66&units=metric');
    const data = await api_call.json();
  console.log(data);
 
}

render(){
  return(
    <div>
      <Titles/>
      <Form getWeather={this.getWeather} />
      <Weather/>

    </div>

    );
}
};


    
export default App;