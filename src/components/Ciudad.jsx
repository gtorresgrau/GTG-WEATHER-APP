import React from 'react';
import { useParams } from 'react-router-dom';
import Style from './Styles/Ciudad.module.css'

export default function Ciudad({onFilter}) {
    var params = useParams();
    var city = onFilter(params.ciudadId);
    if (city) {
        return (
            <div className={Style.cards}>
                    <div className={Style.card}>
                        <h2 className={Style.hname}>{city.name}</h2>
                        <div className={Style.datos}>
                            <div><h3>Temperatura:</h3> {city.temp} ºC</div>
                            <div><h3>Clima:</h3> {city.weather}</div>
                            <div><h3>Viento:</h3> {city.wind} km/h</div>
                            <div><h3>Cantidad de nubes:</h3> {city.clouds}</div>
                            <div><h3>Latitud:</h3> {city.latitud}º</div>
                            <div><h3>Longitud:</h3> {city.longitud}º</div>
                        </div>
                </div>
            </div>
        )
    } else{
        <div>
            <p>NO HAY CIUDADADES PARA MOSTRAR</p>
        </div>
    }
};