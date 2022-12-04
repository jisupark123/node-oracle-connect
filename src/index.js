import regeneratorRuntime, { async } from 'regenerator-runtime';
import dbConfig from '../dbConfig';
import { emp, getHome } from './viewController';
const oracledb = require('oracledb');
const express = require('express');
const app = express();

oracledb.autoCommit = true;

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static('assets'));
app.get('/', getHome);
app.get('/emp', emp);

app.listen(4000, () => {
  console.log(`start with http://localhost:${4000}`);
});
