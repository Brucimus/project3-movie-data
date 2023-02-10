// d3.csv("credits_data.csv").then(console.log("this"));

// function displayData (data){
//     console.log(data);
//     console.log("something");
// }
d3.json("http://localhost:5000/movies").then(function (data) {
    // console.log("js")
    console.log(data)
  });