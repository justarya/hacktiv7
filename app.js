const express = require('express');
const routes = require('./routes');
const session = require('express-session');
const notification = require('./helper/automaticsendmail')

const app = express();
const port = 3300;

const UserController = require('./controller/UserController')
const rejectAuth = require('./middleware/rejectAuth');


app.use(session({
  secret: 'inisaiganudemy',
  resave: false,
  saveUninitialized: true
}))

//node -cron
notification()

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

// controller
app.get('/', rejectAuth, (req,res) => res.render('index'));
app.get('/login', rejectAuth, (req,res) => res.render('login'));
app.post('/login', rejectAuth, UserController.login);

app.get('/register',rejectAuth, (req,res) => res.render('register'));
app.post('/register', rejectAuth, UserController.register);

app.get('/logout', UserController.logout)

// app.use('/user', routes.user);
app.use('/course', routes.course);

app.listen(port, () => console.log(`Successfully Connected to Port ${port}`))