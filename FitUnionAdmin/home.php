<body bgcolor="#F5F5F5">
<script type="text/javascript" src="js/backendless.js"></script>
<script src="js/jquery.js"></script>
<script src="js/highcharts.js"></script>
<script src="js/highcharts-3d.js"></script>
<script src="js/exporting.js"></script>
<script src="js/theme_highchart.js"></script> 
<div id="container" style="height: 700px"></div>

<script>
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'pie',
            
        },
        title: {
            text: 'Dashboard FitUnion'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.value}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox', 45.0],
                ['IE', 26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari', 8.5],
                ['Opera', 6.2],
                ['Others', 0.7]
            ]
        }]
    });
});




</script>
</body>