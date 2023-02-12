// d3.json("http://localhost:5000/movies", function(data) {
//     console.log(data);
// })

d3.json("http://localhost:5000/movies").then(popularityComparisons)

// .then(function (data) {
//     // console.log("js")
//     console.log(data)
//   });


function popularityComparisons(data) {
    let voteavg = data.map(item => {return item[11]});
    let budget = data.map(item => {return item[2]});
    let popularity = data.map(item => {return item[4]});
    let runtime = data.map(item => {return item[8]});

    //Scatter plot 1
    var trace1 = {
        x: popularity,
        y: budget,
        mode: 'markers',
        type: 'scatter'
      };
      
    var data = [trace1];

    var layout = {
        title: 'Budget to Popularity',
        xaxis: {
            title: 'Popularity'
          },
          yaxis: {
            title: 'Budget (USD)'
          }
    }
      
    Plotly.newPlot('scatter1', data, layout);

    //Scatter Plot 2
    var trace2 = {
        x: popularity,
        y: voteavg,
        mode: 'markers',
        type: 'scatter'
      };
      
    var data2 = [trace2];

    var layout2 = {
        title: 'Popularity to Vote Average',
        xaxis: {
            title: 'Popularity'
          },
          yaxis: {
            title: 'Vote Average'
          }
    }
      
    Plotly.newPlot('scatter2', data2, layout2);

    //Scatter Plot 3
    var trace3 = {
        x: popularity,
        y: runtime,
        mode: 'markers',
        type: 'scatter'
      };
      
    var data3 = [trace3];

    var layout3 = {
        title: 'Runtime to Popularity',
        xaxis: {
            title: 'Popularity'
          },
          yaxis: {
            title: 'Runtime (min)'
          }
    }
      
    Plotly.newPlot('scatter3', data3, layout3);
}