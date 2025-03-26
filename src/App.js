import React, { useState } from 'react';
import useBmiCalculation from './Hooks/BMICalculation';
import './style.css';
// import organizedData from './OrganizeOutput';

function App() {
    const { bmi, calculateBmi } = useBmiCalculation();
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('0');
    const [weight, setWeight] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const height = parseInt(heightFeet) * 12 + parseInt(heightInches);
        await calculateBmi(weight, height);

    };

    return (
        <div className="App">
            <div className="Calculator">
                <h1>BMI Calculator</h1>

                <p>Input your height:</p>

                <input type="number" min="0" placeholder="Feet (ft)" onChange={(e) => setHeightFeet(e.target.value)} /><br></br>
                <input type="number" max="11" placeholder="Inches (in)" onChange={(e) => setHeightInches(e.target.value)} />

                <p>Input your weight:</p>
                <input type="number" placeholder="Pounds (lbs)" onChange={(e) => setWeight(e.target.value)} /><br></br>

                <button onClick={handleSubmit}>Submit</button>
             </div>

            <div className="Results">
                <h2>Your BMI is: {bmi}</h2>
                <p>Underweight (BMI &lt; 18.5): A BMI below the healthy range, which may indicate insufficient weight for optimial health.</p>
                <p>Normal weight (BMI 18.5 - 24.9): A healthy range associated with lower health risks.</p>
                <p>Overweight (BMI 25.0 – 29.9): A BMI that may increase the risk of health issues if sustained over time.</p>
                <p>Obese (BMI ≥ 30): Significantly above the healthy range, increasing the likelihood of serious health problems.</p>
            </div>
        </div>
    );
}

export default App;
