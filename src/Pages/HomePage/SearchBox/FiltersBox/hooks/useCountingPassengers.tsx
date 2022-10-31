export const useCountingPassengers = (el: any) => {    
    let result = 0;

    result = el.adults + el.children + el.infants;

    return result;
};