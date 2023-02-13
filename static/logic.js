// d3.json("http://localhost:5000/movies", function(data) {
//     console.log(data);
// })

d3.json("http://localhost:5000/movies").then(revenueComparisons)

// .then(function (data) {
//     // console.log("js")
//     console.log(data)
//   });


function revenueComparisons(data) {
    let revenue = data.map(item => {return item[7]});
    let budget = data.map(item => {return item[2]});
    let popularity = data.map(item => {return item[4]});
    let runtime = data.map(item => {return item[8]});

    //Graph
    var trace1 = {
        x: revenue,
        y: popularity,
        mode: 'markers',
        type: 'scatter'
      };
      
    var data = [trace1];

    var layout = {
        title: 'Revenue to Popularity',
        xaxis: {
            title: 'Revenue (USD)'
          },
          yaxis: {
            title: 'Popularity'
          }
    }
      
    Plotly.newPlot('graph', data, layout);
}