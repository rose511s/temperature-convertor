let temperature, from, to, result, submitBtn;
window.onload = function () {
    //Variables
    temperature = document.getElementById("id_temperature");
    from = document.getElementById("id_from_unit");
    to = document.getElementById("id_to_unit");
    result = document.getElementById("id_result");
    submitBtn = document.getElementById("id_submit");

    temperature.focus();



    //Events
    submitBtn.addEventListener("click", function (event) {
        tempVal = Number(temperature.value);
        fromVal = from.value;
        toVal = to.value;
        event.preventDefault();
        if (temperature) {
            if (fromVal == "C" && toVal == "F") {
                tempVal = tempVal * 9 / 5 + 32;
                result.innerHTML = ` ${tempVal}  &#8457 `;

            } else if (fromVal == "F" && toVal == "C") {
                tempVal = (tempVal - 32) * 5 / 9;
                result.innerHTML = `${tempVal.toFixed(2)} &#8451 `;

            }
            else if (fromVal == "K" && toVal == "F") {
                tempVal = ((9 / 5) * (tempVal - 273)) + 32;
                result.innerHTML = ` ${tempVal} &#8457`;
            }
            else if (fromVal == "F" && toVal == "K") {
                tempVal = 273 + ((5 / 9) * (tempVal - 32));
                result.innerHTML = ` ${tempVal} &#x212A;`;
            }
            else if (fromVal == "K" && toVal == "C") {
                tempVal = tempVal - 273;
                result.innerHTML = ` ${tempVal.toFixed(2)} &#8451`;
            }
            else if (fromVal == "C" && toVal == "K") {
                tempVal = 273 + tempVal;
                result.innerHTML = ` ${tempVal} &#x212A;`
            }
            else {
                if (fromVal == "C" && toVal == "C") {
                    result.innerHTML = `${tempVal} &#8451`;
                } else if (fromVal == "F" && toVal == "F") {
                    result.innerHTML = `${tempVal} &#8457`;
                }
                else if (fromVal == "K" && toVal == "K") {
                    result.innerHTML = `${tempVal} &#x212A; `
                }
            }
        }
        tempVal = "";
        temperature.focus();
    });

}