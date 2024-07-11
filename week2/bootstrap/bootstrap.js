App.js :
// Example chart data
var ctx1 = document.getElementById('chart1').getContext('2d');
var chart1 = new Chart(ctx1, {
 type: 'bar',
 data: {
 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
 datasets: [{
 label: 'Sales',
 data: [12, 19, 3, 5, 2, 3, 10],
 backgroundColor: 'rgba(255, 99, 132, 0.2)',
 borderColor: 'rgba(255, 99, 132, 1)',
 borderWidth: 1
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
var ctx2 = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(ctx2, {
 type: 'line',
 data: {
 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
 datasets: [{
14
 label: 'Profit',
 data: [10, 20, 15, 25, 18, 22, 30],
 backgroundColor: 'rgba(54, 162, 235, 0.2)',
 borderColor: 'rgba(54, 162, 235, 1)',
 borderWidth: 1
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