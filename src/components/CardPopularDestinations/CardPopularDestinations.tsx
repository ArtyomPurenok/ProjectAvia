
import React, { useEffect, useState } from 'react';
import { Wrapper, Image, CountryName } from './CardPopularDestinations.style';
import getImage from '../../utils/getImage' ;

type CardPopularDestinationsProp = {
    image?: JSX.IntrinsicElements;
    caption: string;
    link?: JSX.IntrinsicElements;
    countryName: string;
}

export const CardPopularDestinations = ({ image, caption, link, countryName }: CardPopularDestinationsProp) => {
    const [getIma, setImage] = useState();
    const url=`https://api.unsplash.com/search/photos?query=${caption}&count=2&per_page=1&client_id=HPWDMIL49P3JaHmuIayt9q8d-L3p6ROeoi89zfRQGVA`;
   useEffect(() => {
    (async function(){const s = await getImage(url);
        setImage(s.results[0].urls.small_s3);})();
   }, []);
    return (
         <Wrapper>
        <CountryName>{countryName}</CountryName>
             <Image src={getIma} />
        {/* //     <Caption> {caption}</Caption> */}
         </Wrapper>
    );
};
