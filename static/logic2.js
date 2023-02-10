// d3.json("http://localhost:5000/movies", function(data) {
//     console.log(data);
// })

d3.json("http://localhost:5000/movies").then(function (data) {
    // console.log("js")
    console.log(data)
  });