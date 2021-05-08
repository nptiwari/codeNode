const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const weather = (req, res, next) => {
  req.todayWeather = true;
  next();
};

app.get('/', weather, (req, res) => {
  res.render('index', {
    israining: req.todayWeather,
    pets: [
      {
        name: 'Meowsalot',
        species: 'cat',
      },
      {
        name: 'Barksalot',
        species: 'dog',
      },
    ],
  });
});
app.post('/results', (req, res) => {
  if (req.body.color.trim().toUpperCase() === 'BLUE') {
    res.send("You r absolutely correct dhead I'm don");
  } else {
    res.send('please try again.');
  }
});

app.get('/api/pets', (req, res) => {
  res.json([
    {
      name: 'Meowsalot',
      species: 'cat',
    },
    {
      name: 'Barksalot',
      species: 'dog',
    },
  ]);
});

app.listen(4000, () => {
  console.log('listening on 4000 dipshit');
});
