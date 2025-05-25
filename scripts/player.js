// Пример данных K/D по матчам (можно загрузить из JSON)
const kdData = [1.2, 1.5, 0.9, 2.0, 1.7];   // K/D в каждом матче
const matchLabels = ['Матч 1', 'Матч 2', 'Матч 3', 'Матч 4', 'Матч 5'];

const ctx = document.getElementById('kdChart').getContext('2d');

const kdChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: matchLabels,
    datasets: [{
      label: 'K/D по матчам',
      data: kdData,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.3,
      pointRadius: 5,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 3
      }
    }
  }
});

