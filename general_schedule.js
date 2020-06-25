google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);

function daysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Task ID');
  data.addColumn('string', 'Task Name');
  data.addColumn('string', 'Resource');
  data.addColumn('date', 'Start Date');
  data.addColumn('date', 'End Date');
  data.addColumn('number', 'Duration');
  data.addColumn('number', 'Percent Complete');
  data.addColumn('string', 'Dependencies');

  data.addRows([
    ['pcb', 'DAPHNE PCB Development',                       'pull',   new Date(2019, 7, 1),new Date(2020, 7, 1),  null,                   100,  null],
    ['firmware','Firmware Development',                     'full', new Date(2019, 7, 1),new Date(2020, 7, 1),  null,                     50, null],
    ['prototype','Preproduction Prototype',                 'jull', new Date(2020, 7, 1),new Date(2020,11, 1),  null,                     50, null],
    ['improvements','Design Verification and Improvements', 'tull', new Date(2020, 1, 1),new Date(2020,11, 1),  null,                     50, null],
    ['test','Test',                                         'vull', new Date(2020,10, 1),new Date(2021, 4, 1),  null,                     0, null],
  ]);

  var options = {
    height: 500
  };

  var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

  chart.draw(data, options);
}
