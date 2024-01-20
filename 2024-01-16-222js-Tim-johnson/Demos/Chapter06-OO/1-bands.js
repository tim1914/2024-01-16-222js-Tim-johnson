const band1 = {
    name: "Pink Floyd",
    country: "England",
    yearFormed: 1965,
    genres: ["Progressive Rock", "Psychedelic Rock", "Art Rock"]
};

function showBands() {
    let output = "";
    for (let property in band1) {
        output += band1[property] + "\n";
    }
    console.log(`output:\n`, output);
}

showBands();


const band2 = new Object();
band2.name = "Pink Floyd";
band2.country = "England";
band2.yearFormed = 1965;
band2.genres = ["Progressive Rock", "Psychedelic Rock", "Art Rock"];

