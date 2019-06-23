const ctx = document.getElementById('chart').getContext('2d');
const realtime = new Chart(ctx).Bar({
  labels: [],
  datasets: [{
    fillColor: 'rgba(0,60,100,1)',
    strokeColor: 'black',
    data: []
  }]
}, {
  responsive: true,
  barValueSpacing: 2
});

let isFirst = true;
const ws = new WebSocket('wss://neto-api.herokuapp.com/realtime');
ws.addEventListener('message', event => {
  if (isFirst) {
    event.data
      .split(':')
      .map(line => line.split(/["":{}]/))
      .forEach(data => realtime.addData([Number(data[1])], data[0]));

    isFirst = false;
  } else {
<<<<<<< HEAD
    const [label, data] = event.data.split(`,`);
=======
    const [label, data] = event.data.split(/\:\w/);
>>>>>>> 280caa404c573586de5c82304f0e0c62cc9a645c
    realtime.removeData();
    realtime.addData([Number(data)], label);
  }
});
