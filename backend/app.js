require('@babel/register');
require('dotenv').config();
const express = require('express');
const serverConfig = require('./src/serverConfig');
const ssr = require('./src/middleware/ssr');
const getUser = require('./src/middleware/getUser');
const AuthForm = require('./src/routes/view/auth.routes');
const AuthApiForm = require('./src/routes/api/auth.api.routes');
const LoginForm = require('./src/routes/view/login.routes');
const Home = require('./src/routes/view/main.routes');
const Profile = require('./src/routes/view/profile.routes');
const Channel = require('./src/routes/view/channel.routes');
const ChannelsApiRoutes = require('./src/routes/api/channels.api.routes');
const LikesApiRoutes = require('./src/routes/api/likes.api.routes');
const phonesApiRoute = require('./src/routes/api/phones.api.routes');

const app = express();

serverConfig(app);

const PORT = process.env.PORT ?? 4000;
app.use(getUser);
app.use(ssr);
app.use('/', Home);
app.use('/register', AuthForm);
app.use('/login', LoginForm);
app.use('/profile', Profile);
app.use('/api', AuthApiForm);
app.use('/channels', Channel);
app.use('/api/subscribe', ChannelsApiRoutes);
app.use('/api/likes', LikesApiRoutes);
app.use('/api/phones', phonesApiRoute);

app.listen(PORT, () => {
  console.log(`Server is start in ${PORT} port!`);
});
