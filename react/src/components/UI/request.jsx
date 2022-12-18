export {serverURL, getGender, minSymbols}

const serverURL = 'https://api.genderize.io';
const minSymbols = 2;

async function getGender(url){
    try {
        let response = await fetch(url);
        console.log('Пошёл запрос...');
        if (!response.ok) {
            console.log('Error' + response.status);
        } else {
            console.log('Запрос вернулся...');
            return response.json();
        }
    }
    catch(err) {
        console.log(err.message);
    }
};