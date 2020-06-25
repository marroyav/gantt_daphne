
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
    ['define', 'Define Tools',            null, new Date(2020, 4, 1),new Date(2020, 4, 15),  null,                   100,  null],
    ['develop','uC Firmware Development', 'full', new Date(2020, 5, 1),new Date(2021, 4, 1),  null,                     15,  'define'],
    ['minimal','Setup minimal Firmware',  null, null,                new Date(2020, 7, 10), daysToMilliseconds(90),   30,  null],
    ['test0',  'Daphne Firmware Test 0',  'teste', null,                new Date(2020, 8, 20), daysToMilliseconds(12),    0,    'minimal'],
    ['setup',  'Setup Complete Firmware', null, new Date(2020, 9, 10),new Date(2021, 2, 15), daysToMilliseconds(15),    0,   'test0'],
    ['test1',  'Daphne Firmware Test 1',  'teste', null,                new Date(2021, 4, 1),  daysToMilliseconds(15),    0,   'setup'],
  ]);

  var options = {
    height: 500
  };

  var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

  chart.draw(data, options);
}
