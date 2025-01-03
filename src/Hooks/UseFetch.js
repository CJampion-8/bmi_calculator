import convert from 'convert';

const url = 'https://bmi.p.rapidapi.com/v1/bmi';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '87f2375414msh8afbb8ec60c4207p17e8fdjsn4ea64ce2ae6c',
		'x-rapidapi-host': 'bmi.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
};

const fetchBmiFromApi = async (weight, height) => {
    const url = `https://bmi.p.rapidapi.com/v1/bmi`;
    try {
        options.body = JSON.stringify({
            weight: {
                value: convert(weight, "pounds").to("kg").toFixed(0),
                unit: 'kg'
            },
            height: {
                value: convert(height, "inches").to("cm").toFixed(0),
                unit: 'cm'
            },
            sex: 'm',
            age: '24',
            waist: '34.00',
            hip: '40.00'

    });
        const response = await fetch(url, options);
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    } catch (error) {
        console.error("Error fetching BMI Data: ", error);
    }
};

function useFetch() {
    return fetchBmiFromApi;
};

export default useFetch;