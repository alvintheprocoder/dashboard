// Initialize the Projections vs Actuals Chart
var ctx1 = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Actuals',
            data: [65, 59, 80, 81, 56, 55, 40, 45, 70, 91, 76, 85],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: 'Projections',
            data: [100, 90, 95, 88, 65, 75, 60, 65, 90, 100, 95, 110],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
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

// Initialize the Revenue Chart
var ctx2 = document.getElementById('revenueChart').getContext('2d');
var revenueChart = new Chart(ctx2, {
    type: 'line', // Change to 'bar', 'pie', etc. based on your needs
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'], // Example labels
        datasets: [{
            label: 'Revenue',
            data: [10, 20, 15, 25, 30], // Example data
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
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

// JavaScript for sidebar toggle
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});
