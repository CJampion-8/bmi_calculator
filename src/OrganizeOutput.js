const organizeData = (data) => ({
    bmi: data.bmi.toFixed(1),
    height: `${data.height_in_inches} inches`,
    weight: `${data.weight_in_lbs} pounds`,
    category: data.bmiCategoryForAdults.category,
    range: data.bmiCategoryForAdults.range,
    normalRange: data.bmiCategoryForAdults.normalRange
})

const apiResponse = {

}

const organizedData = organizeData(apiResponse);
console.log(organizedData);

export default organizedData;