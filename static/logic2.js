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
    let voteavg = data.map(item => {return item[11]});
    let runtime = data.map(item => {return item[8]});

    //Scatter plot 1
    var trace1 = {
        x: revenue,
        y: budget,
        mode: 'markers',
        type: 'scatter'
      };
      
    var data = [trace1];

    var layout = {
        title: 'Budget to Revenue',
        xaxis: {
            title: 'Revenue (USD)'
          },
          yaxis: {
            title: 'Budget (USD)'
          }
    }
      
    Plotly.newPlot('scatter1', data, layout);

    //Scatter Plot 2
    var trace2 = {
        x: revenue,
        y: voteavg,
        mode: 'markers',
        type: 'scatter'
      };
      
    var data2 = [trace2];

    var layout2 = {
        title: 'Revenue to Vote Average',
        xaxis: {
            title: 'Revenue (USD)'
          },
          yaxis: {
            title: 'Vote Average'
          }
    }
      
    Plotly.newPlot('scatter2', data2, layout2);

    //Scatter Plot 3
    var trace3 = {
        x: revenue,
        y: runtime,
        mode: 'markers',
        type: 'scatter'
      };
      
    var data3 = [trace3];

    var layout3 = {
        title: 'Runtime to Revenue',
        xaxis: {
            title: 'Revenue (USD)'
          },
          yaxis: {
            title: 'Runtime (min)'
          }
    }
      
    Plotly.newPlot('scatter3', data3, layout3);
}