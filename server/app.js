import express    from 'express';
import webpack    from 'webpack';
import path       from 'path';
import config     from '../webpack.config';
import bodyParser from 'body-parser';
import morgan     from 'morgan';
import jwt        from 'jsonwebtoken';
import cfg        from './config';

const port     = 3000;
const app      = express();
const compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.post("/api/user/validate",  function(req, res) {
  console.log('------------------->>> /api/user/validate <<<-------------------');
  console.log(req.body);
  console.log(req.body.userName);
  console.log(req.body.userPassword);
  let payload = {userName:req.body.userName, firstName:'Veera Reddy', lastName:'obulareddy', mobile:'+918105555322'}
  var token = jwt.sign(payload, cfg.jwtSecret , { expiresIn: cfg.jwtSession.expiresIn  });

  // return the information including token as JSON
  res.json({
    success: true,
    message: 'Enjoy your token!',
    token: token
  });
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`http://localhost:${port}`);
  }
});
