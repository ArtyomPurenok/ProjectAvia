export const useCountingPassengers = (el: any) => {
    console.log(el);
    
    let result = 0;

    result = el.adults + el.children + el.infants;

    return result;
};