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
    ['gateware', 'Basic Gateware', null, new Date(2020, 1, 1),new Date(2020, 3, 1),  null,                   100,  null],
    ['afe',      'AFE',            null, null,                new Date(2020, 6, 1),  daysToMilliseconds(60), 25,   'gateware'],
    ['eth',      'ETH Gb',         null, null,                new Date(2020, 4, 15), daysToMilliseconds(45), 100,  'gateware'],
    ['uc',       'Bare Metal uC',  null, null,                new Date(2020, 7, 10), daysToMilliseconds(90), 30,    'gateware'],
    ['daphne',   'DAPHNE PCB',    'hd',  new Date(2020, 4, 1),new Date(2020, 8, 15),  null,                   70,   null],
    ['afet',     'AFE test',      'dhd', null,                new Date(2020, 9, 1),  daysToMilliseconds(15), 0,   'daphne'],
    ['fm',       'FULL MODE',      null, null,                new Date(2020, 4, 6),  daysToMilliseconds(90), 70,   null],
    ['test',     '4.8Gb/s TEST',  'dhd', null,                new Date(2020, 6, 6),  daysToMilliseconds(20), 0,   'fm']
  ]);

  var options = {
    height: 500
  };

  var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

  chart.draw(data, options);
}
