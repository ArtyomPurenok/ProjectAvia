import React, { useEffect, useState } from 'react';
import { popularQuery } from '../../utils/popularQuery';
import { CardPopularDestinations } from '../CardPopularDestinations/CardPopularDestinations';
import { ParentGrid, CardContainer } from './PopularDestinationGrid.style';

export const PopularDestinationGrid = () => {
  const [card, setCard] = useState([]);
  const url = 'https://api.tequila.kiwi.com/locations/topdestinations?term=MSQ&locale=ru-RU&limit=5&sort=name&active_only=true&source_popularity=bookings';

  useEffect(() => {
    (async function () {
      const data = await popularQuery(url);
      setCard(data.locations);
    })();
  }, []);
  return (
    <ParentGrid>
      {card && card.map((card: any, index) => (
        <CardContainer className={`child${index+1}`}>
          <CardPopularDestinations key={card.id} caption={card.name} countryName={card.country.name} />
        </CardContainer>
      ))}
    </ParentGrid>
  );
};
