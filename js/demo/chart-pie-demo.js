// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Deluxe Eiffle Suite", "Junior Suite", "Superior Junior Suite"],
    datasets: [{
      data: [55, 30, 15],
      backgroundColor: ['#007AFF', '#FEC107', '#DC3546'],
      hoverBackgroundColor: ['#4AA1FF','#FDD14D','#F84254'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 2,
      xPadding: 15,
      yPadding: 15,
      displayColors: true,
      caretPadding: 20,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
