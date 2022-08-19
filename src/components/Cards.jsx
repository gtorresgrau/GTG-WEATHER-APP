import React from 'react';
import Card from './Card.jsx';
import Styles from './Styles/Cards.module.css';


export default function Cards({cities, onClose}) {
      if (!cities) {
        return <p> loading.. </p>
      }
        return <div className={Styles.cards}>
            {cities.map((c) => (
              <Card  
              key = {c.id}
              id = {c.id}
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.img}
              onClose={() => onClose(c.id)}
              />
            ))}
      </div>
};