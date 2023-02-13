const movieData = [];
const titleArray = [];
const revenueArray = [];

const revenue = document.getElementById('revenueChart');

d3.csv("http://localhost:5000/data/movies1", (res) => movieData.push(res)).then(() => {
  const limitArray = movieData.slice(0, 5);
  console.log('Movie Data 1: ', limitArray);

  for (let i = 0; i < limitArray.length; i++) {
    titleArray.push(limitArray[i].title);
    revenueArray.push(limitArray[i].revenue);
  }

  console.log(revenueArray);
  revenueChart(titleArray, { data: revenueArray } )
});

function revenueChart (labelsArr, { data: data }) {
  console.log(labelsArr);
  new Chart(revenue, {
    type: 'bar',
    data: {
      labels: labelsArr,
      datasets: [{
        label: 'Revenue of movies',
        data: data,
        borderWidth: 1,
        borderColor: '#36A2EB',
        backgroundColor: ['#1f77b4', '#ff7f0e', '#2ca02c', '#17becf', 'rgb(255, 99, 132, 0.4)']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}