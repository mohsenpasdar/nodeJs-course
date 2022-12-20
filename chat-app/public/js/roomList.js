const socket = io()

socket.on('roomsList', (roomsList) => {
    console.log(roomsList);
})