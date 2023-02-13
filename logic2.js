
const movieData = [];
const titleArray = [];
const popularArray = [];

const popular = document.getElementById('popularChart')
d3.csv("http://localhost:5000/data/movies2", (res) => movieData.push(res)).then(() => {
    const limitArray = movieData.slice(0, 5);
    console.log('Movie Data 2: ', limitArray);

    for (let i = 0; i < limitArray.length; i++) {
        titleArray.push(limitArray[i].title);
        popularArray.push(parseFloat(limitArray[i].popularity).toFixed(2));
    }

    console.log(titleArray);
    popularChart(titleArray, { data: popularArray } )
});

function popularChart (titleArray, { data: popularArr }) {
    new Chart(popular, {
        type: 'doughnut',
        data: {
            labels: titleArray,
            datasets: [{
                label: 'Popular movies',
                data: popularArr,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(39, 110, 86)',
                    'rgb(207, 28, 229)',
                ],
                hoverOffset: 4
            }],
        },
        options: {
            responsive: true,

            maintainAspectRatio: false,
            aspectRatio: 0.5,
            cutoutPercentage: 80,
            animation: {
                animateScale: true,
                animateRotate: true
            },
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    top: 150,
                    bottom: 50
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Popular for Movies'
                }
            },

            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                        var total = meta.total;
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = parseFloat((currentValue/total*100).toFixed(1));
                        return currentValue + ' (' + percentage + '%)';
                    },
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    }
                }
            }
        },
    });

}