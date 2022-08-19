import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import Style from './components/Styles/App.module.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx'
import Ciudad from './components/Ciudad';

const apiKey = "bddff71345fd8970b48052e946b12b89";
export default function App() {
  const [cities, setCities] = useState([]);
  
  function onSearch(ciudad){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .catch(error => console.error(error))
    .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: recurso.main.temp_min,
            max: recurso.main.temp_max,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return "Esta ciudad NO Existe";
    }
  }
return <div className={Style.App}>
        <Route path='/' render={() => <Nav onSearch={onSearch}/>} />
        <Route exact path='/' render={()=> <Cards cities={cities} onClose={onClose}/>}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/ciudad/:ciudadId'><Ciudad onFilter={onFilter}/></Route>
      </div>
};
