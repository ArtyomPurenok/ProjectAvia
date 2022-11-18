const getImage = async (url) => {
    try {
        const response = await fetch(url);
        const responseF= await response.json();
        return responseF;
    } catch (error) {
        return console.log(error);
    }
};
export default getImage;