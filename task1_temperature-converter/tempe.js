function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperatureInput").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    if (fromUnit === toUnit) {
        document.getElementById("result").textContent = "Result: " + temperature + " " + toUnit;
        return;
    }

    var result;
    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (temperature * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            result = temperature + 273.15;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (temperature - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            result = ((temperature - 32) * 5/9) + 273.15;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = temperature - 273.15;
        } else if (toUnit === "fahrenheit") {
            result = ((temperature - 273.15) * 9/5) + 32;
        }
    }

    document.getElementById("result").textContent = "Result: " + result.toFixed(2) + " " + toUnit;
}