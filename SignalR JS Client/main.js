// Create a SignalR connection
var connection = new signalR.HubConnectionBuilder()
.withUrl('SIGNALR_HUB_URL')
.configureLogging(signalR.LogLevel.Information)
.build();

// Start the SignalR connection
connection.start().then(function () {
console.log('SignalR connected');
}).catch(function (err) {
console.error(err.toString());
});

// Listen to an event from the SignalR hub
connection.on('mySignalREvent', function (data) {
console.log('Received event with data:', data);
});