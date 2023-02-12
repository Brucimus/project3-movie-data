d3.json("http://localhost:5000/genrespopularity").then(popularityComparisons)

// .then(function (data) {
//     // console.log("js")
//     console.log(data)
//   });


function popularityComparisons(data) {
    let genre = data.map(item => {return item[0]});
    let genreAvg = data.map(item => {return item[1]});
    let genreSum = data.map(item => {return item[2]});
    let genreCount = data.map(item => {return item[3]});

    //Pie
    var trace1 = {
        values: genreSum,
        labels: genre,
        type: 'pie'
      };
      
    var data = [trace1];

    var layout = {
        title: 'Genre Popularity Percentage'
    }
      
    Plotly.newPlot('pie', data, layout);

    //Bar
    var trace2 = {
        x: genre,
        y: genreAvg,
        mode: 'markers',
        type: 'bar'
      };
      
    var data2 = [trace2];

    var layout2 = {
        title: 'Popularity Average by Genre',
        xaxis: {
            title: 'Genre'
          },
          yaxis: {
            title: 'Popularity'
          }
    }
      
    Plotly.newPlot('bar', data2, layout2);

    
    //Pie2
    var trace3 = {
        values: genreCount,
        labels: genre,
        type: 'pie'
      };
      
    var data3 = [trace3];

    var layout3 = {
        title: 'Genre Count'
    }
      
    Plotly.newPlot('pie2', data3, layout3);
}