document.addEventListener('DOMContentLoaded', async () => {
    //add a comment here that explains the fetching and processing of data    
    // the endpoint of the api makes a call to get the data
    const response = await fetch('/api/data');
    const data = await response.json();

    const labels = data.map(item => new Date(item.observationtimeutc).toLocaleString());
    const values = data.map(item => item.value);

    //comment explaining the creation and configuration of the chart.js chart
    // Chart.js merges the options object passed to the chart with the global configuration using chart type defaults and scales defaults appropriately.
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Observation Values',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'minute'
                    }
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
