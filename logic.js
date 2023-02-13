// d3.csv("credits_data.csv").then(console.log("this"));

// function displayData (data){
//     console.log(data);
//     console.log("something");
// }

// the below d3.json is wrong write
// d3.json("http://localhost:5000/movies").then(function (data) {
  // console.log("js")
  // console.log(data)
// });

// if you wanna fetch data api, you should use d3.js or Papa.js third party js lib to help you convert csv file
// because I am not unable run your app.py (cause of not had database information to connect)

// fetch('http://localhost:5000/data/movies1').then(async (res) => {
//   const result = await res.json();
//   var data = Papa.parse(result);
//   console.log(data);
// })

var movieData = [];
d3.csv("http://localhost:5000/data/movies1", (res) => { 
  movieData.push(res) 
}).then((res) => {
  console.log(res)
    console.log('Movie Data 1: ', movieData);
});