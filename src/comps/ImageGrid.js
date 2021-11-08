import React, { useState, useEffect } from 'react';
import { ImageList, ImageListItem } from '@mui/material';

const ImageGrid = ({ setValues }) => {
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
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={220}>
      {cocktails.map((cocktail) => (
        <ImageListItem key={cocktail.idDrink} onClick={() => setValues(cocktail.strDrinkThumb, cocktail.strDrink)}>
          <img
            src={`${cocktail.strDrinkThumb}?w=164&h=220&fit=crop&auto=format`}
            srcSet={`${cocktail.strDrinkThumb}?w=164&h=220&fit=crop&auto=format&dpr=2 2x`}
            alt={cocktail.strDrink}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ImageGrid;
