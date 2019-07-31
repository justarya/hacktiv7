const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3000;

// controller

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res) => res.render('index'));
// app.get('/login', user.loadLogin);
// app.post('/login', user.login);

// app.get('/register', user.loadRegister);
// app.post('/register', user.register);

// app.use('/user', routes.user);
app.use('/course', routes.course);

app.listen(port, () => console.log(`Successfully Connected to Port ${port}`))