const movieData = [];
const titleArray = [];
const voteAve = [];

const voteAverage = document.getElementById('voteAve');

d3.csv("http://localhost:5000/data/movies3", (res) => movieData.push(res)).then(() => {
    const limitArray = movieData.slice(0, 5);
    console.log('Movie Data 3: ', limitArray);

    for (let i = 0; i < limitArray.length; i++) {
        titleArray.push(limitArray[i].title);
        voteAve.push(limitArray[i].vote_average);
    }

    console.log(titleArray);
    popularChart(titleArray, { data: voteAve } )
});

function popularChart (titleArray, { data: voteArr }) {
    new Chart(voteAverage, {
        type: 'line',
        data: {
            labels: titleArray,
            datasets: [{
                label: 'Vote average movies',
                data: voteArr,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(39, 110, 86)',
                    'rgb(207, 28, 229)',
                ],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }],
        },
    });

}