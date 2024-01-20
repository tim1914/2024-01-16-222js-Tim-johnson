/* eslint-disable no-unused-vars */
function getBands() {
    let xmlhttp = new XMLHttpRequest();
    let url = "http://localhost:3000/bands";

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let myArr = JSON.parse(xmlhttp.responseText);
            populateBandsDiv(myArr);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function populateBandsDiv(bandsArray) {
    console.log(`bands`, bandsArray);
    let out = "";
    let i;
    for (i = 0; i < bandsArray.length; i++) {
        let currentBand = bandsArray[i];
        out += 
        `${currentBand.name} was formed in ${currentBand.yearFormed} in ${currentBand.city}<br /> 
        `;
    }
    document.getElementById("showBands").innerHTML = out;
}