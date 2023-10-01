const pingRoute = (app) => {
  app.get('/ping', (req, res) => {
    res.send('Pong!');
  });
};

export default pingRoute;
