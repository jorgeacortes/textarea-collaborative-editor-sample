var socket = io.connect();
var testarea = document.getElementById("testing-area");

function input_update_callback() {
    socket.emit('myInputUpdate', {
        contents:testarea.value
    });
}

(function() {
    socket.on('myInputUpdate', function (data) {
        testarea.value = data.contents;
    });
})();
