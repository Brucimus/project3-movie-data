// d3.json("http://localhost:5000/movies", function(data) {
//     console.log(data);
// })

// wrong
// d3.json("http://localhost:5000/movies").then(function (data) {
//   // console.log("js")
//   console.log(data)
// });

var movieData = [];

// localhost:5500 is my port server, you can change to your port server and csv file direction
fetch('http://localhost:5000/data/movies2').then(async (res) => {
    const result = await res.json();
    var data = Papa.parse(result);
    console.log(data);
})