const randomChartData = n => {
  let data = []

  for (let i = 0; i < n; i++) {
    data.push(Math.round(Math.random() * 200))
  }

  return data
}

const chartColors = {
  default: {
    primary: '#00D1B2',
    info: '#209CEE',
    danger: '#FF3860'
  }
}

const ctx = document.getElementById('big-line-chart').getContext('2d');
const ctx2 = document.getElementById('satisfaction-bar-chart').getContext('2d');
// const ctx3 = document.getElementById('doughnut-chart').getContext('2d');

const labels2 = ["Hombre", "Mujer"];
const data2 = {
  labels: labels2,
  datasets: [{
    label: 'Satisfacción',
    data: [7, 5, 3],
    backgroundColor: [
      'rgba(153, 102, 255, 0.2)',
      'rgb(255, 205, 86, 0.2)',
    ],
    borderColor: [
      'rgb(153, 102, 255)',
      'rgb(255, 205, 86)',
    ],
    borderWidth: 1
  }]
};

const labels = ["0-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80+"];
const data = {
  labels: labels,
  datasets: [{
    label: 'Satisfacción',
    data: [65, 59, 80, 81, 56, 55, 40, 1],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};


new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
})

const mychart2 = new Chart(ctx2, {
  type: 'bar',
  data: data2,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
})

// const config = {
  
// };


// new Chart(ctx3, {
//   type: 'doughnut',
//   data: data3,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   },
//   endpoint: mychart2.scale.endPoint
// })

// const labels3 = [1, 2, 3, 4, 5, 6, 7];
// const data3 = {
//   labels: labels3,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40, 0],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(255, 159, 64, 0.2)',
//       'rgba(255, 205, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(201, 203, 207, 0.2)'
//     ],
//     borderColor: [
//       'rgb(255, 99, 132)',
//       'rgb(255, 159, 64)',
//       'rgb(255, 205, 86)',
//       'rgb(75, 192, 192)',
//       'rgb(54, 162, 235)',
//       'rgb(153, 102, 255)',
//       'rgb(201, 203, 207)'
//     ],
//     borderWidth: 1
//   }]
// };