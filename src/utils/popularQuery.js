 export const popularQuery = async (url) => {
    const options = {
        headers: {
            'accept': 'application/json',
            'apikey': 'ftlmCHIrWRvayIj867aXpbi5q6D5q5hR',
        },
    };
    const response = await fetch(url, options);
    const responseFormat = await (response).json();
return  responseFormat;
};