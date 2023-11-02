module.exports = function (io) {
  io.on("connection", async (socket) => {
    console.log("client is connected", socket.id);

    socket.on("disconnect", () => {
      console.log(socket.id, "user is disconnected");
    });
  });
};
