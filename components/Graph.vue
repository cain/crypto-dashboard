<script>
// CommitChart.js
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: 'rgba(255,255,255,0)',
          borderColor: '#ff3860',
          borderWidth: 1,
          dotBorderWidth: 0,
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      legend: { display: false },
      gridLines: {
        drawBorder: false
      },
      scales: {
        yAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false
          }
        }],
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false
          }
        }]
      }
    })
  }
}
</script>

<style>

.chartjs-render-monitor {
  max-height: 50px;
}

</style>
