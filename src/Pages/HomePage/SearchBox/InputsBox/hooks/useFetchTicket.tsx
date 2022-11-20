
export const useFetchTicket =  async (dataForSearchReducer: any) => {

    try {
        const url = `https://api.tequila.kiwi.com/v2/search?fly_from=${dataForSearchReducer.inputFromIATA}&fly_to=${dataForSearchReducer.inputToIATA}&dateFrom=${dataForSearchReducer.calendarStart}&date_to=${dataForSearchReducer.calendarFinish}&adults=${dataForSearchReducer.adults}&children=${dataForSearchReducer.children}&infants=${dataForSearchReducer.infants}&selected_cabins=${dataForSearchReducer.flightClass}&flight_type=oneway&limit=10`;
        const options = {
            headers: {
                'accept': 'application/json',
                'apikey': 'ftlmCHIrWRvayIj867aXpbi5q6D5q5hR',
            },
        };
        const response = await fetch(url, options);
        const responseFormat = await (response).json();
        console.log(await responseFormat);



        if (response.ok) {
            return responseFormat;
            
        }
    } catch (error) {
        return console.log(error);
    }
};