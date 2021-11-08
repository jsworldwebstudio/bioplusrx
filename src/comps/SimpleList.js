import React, { useState, useEffect } from 'react';

const SimpleList = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
        );
        const json = await response.json();
        console.log(json.drinks);
        setCocktails(json.drinks);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <ul>
        {cocktails.map(cocktail => (
          <li key={cocktail.idDrink}>
            <a href={cocktail.strDrinkThumb}>{cocktail.strDrink}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleList;
