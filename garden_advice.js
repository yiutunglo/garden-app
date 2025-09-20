// User interaction ask for season, plant type
let season = prompt("What season (spring, summer, autumn, winter)?");
let plantType = prompt("What types of plants (flowers, vegetables, trees, herbs, etc.)?");

// function return Season advice message
function adviceSeason(season) {
  if (season === "summer") {
    return "Water your plants regularly and provide some shade.\n";
  } else if (season === "winter") {
    return "Protect your plants from frost with covers.\n";
  }
  return "No advice for this season.\n";
}

// function return Plant Type advice message
function advicePlantType(plantType) {
  if (plantType === "flower") {
    return "Use fertiliser to encourage blooms.";
  } else if (plantType === "vegetable") {
    return "Keep an eye out for pests!";
  }
  return "No advice for this type of plant.";
}

// Variable to hold gardening advice
let advice = "";
advice += adviceSeason(season);
advice += advicePlantType(plantType);

// Log the generated advice to the console
console.log(advice);
