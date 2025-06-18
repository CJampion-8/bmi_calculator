# BMI Calculator

A responsive React application that calculates Body Mass Index (BMI) using user input for height and weight. The application integrates with an external API for accurate calculations and provides a backup calculation method for reliability.

![BMI Calculator](https://img.shields.io/badge/React-18.3.1-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Intuitive User Interface**: Clean, modern design with easy-to-use input fields
- **Imperial Units Support**: Input height in feet and inches, weight in pounds
- **API Integration**: Uses RapidAPI's BMI calculation service for accurate results
- **Fallback Calculation**: Automatic backup calculation if API is unavailable
- **Real-time Results**: Instant BMI calculation and health category display
- **Health Information**: Comprehensive BMI category explanations and health ranges
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## BMI Categories

The application provides information about the following BMI categories:

- **Underweight** (BMI < 18.5): Below healthy range
- **Normal weight** (BMI 18.5 - 24.9): Healthy range
- **Overweight** (BMI 25.0 – 29.9): Above healthy range
- **Obese** (BMI ≥ 30): Significantly above healthy range

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cjampion-8/bmi_calculator.git
   cd bmi_calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Built With

- **React** (18.3.1) - Frontend framework
- **React Hooks** - State management and custom hooks
- **Convert** - Unit conversion library
- **RapidAPI BMI Service** - External BMI calculation API
- **CSS3** - Styling and responsive design

## Project Structure

```
src/
├── App.js                 # Main application component
├── index.js              # Application entry point
├── style.css             # Global styles
├── Hooks/
│   ├── BMICalculation.js  # Custom hook for BMI logic
│   └── UseFetch.js       # Custom hook for API calls
└── OrganizeOutput.js     # Data organization utilities
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages

## API Integration

The application uses the BMI calculation API from RapidAPI, which provides:

- Accurate BMI calculations based on metric conversions
- Additional health metrics and recommendations
- Reliable service with error handling

### Fallback Calculation

If the API is unavailable, the application automatically uses the standard BMI formula:
```
BMI = (weight in pounds × 703) / (height in inches)²
```

## Styling

The application features:

- Modern, clean interface design
- Responsive layout for all screen sizes
- Intuitive form controls and visual feedback
- Clear typography and accessible color scheme

## Deployment

This project is configured for deployment to GitHub Pages:

```bash
npm run deploy
```

The live application is available at: [https://cjampion-8.github.io/bmi_calculator](https://cjampion-8.github.io/bmi_calculator)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**cjampion-8**

- GitHub: [@cjampion-8](https://github.com/cjampion-8)
- Portfolio: [https://cjampion-8.github.io/project_portfolio](https://cjampion-8.github.io/project_portfolio)

## Acknowledgments

- RapidAPI for providing the BMI calculation service
- React community for excellent documentation and resources
- Contributors and testers who helped improve the application

---

*This BMI calculator is for informational purposes only and should not replace professional medical advice.*