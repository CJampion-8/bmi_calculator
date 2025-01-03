import React, { useState } from 'react';
import useFetch from './UseFetch';

function useBmiCalculation() {
    const [bmi, setBmi] = useState(null);
    const fetchBmiFromApi = useFetch();

    const calculateBmi = async (weight, height) => {
        if (weight && height) {
            const result = await fetchBmiFromApi(weight, height);
            console.log(`Height: ${height} inches \n Weight: ${weight} pounds`)
            if (result) {
                const resultNumber = Number(result.bmi.value);
                setBmi(resultNumber.toFixed(1));
            } else {
                console.log('Unable to fetch BMI data API. Calculating with backup instead.');
                const backupResult = (weight * 703) / (height * height);
                setBmi(backupResult.toFixed(2));

                // setBmi('Error fetching BMI data. Please try again.')
            }
        }
        else {
            if (!weight)
                console.log('No weight value.')
            if (!height)
                console.log('No height value.')
            
            alert('Please enter all values.');
        }
        
        
    };

    return { bmi, calculateBmi };
}

export default useBmiCalculation;
