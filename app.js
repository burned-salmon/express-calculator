/** Express mean/median/mode calculator. */

const express = require('express');
const ExpressError = require('./expressError');
const { stringToNumList, mean, median, mode } = require('./helpers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  return res.send('Hello World!');
});

app.get('/mean', function (req, res) {
  if(!req.query.nums) {
    throw new ExpressError('Nums is required.', 400)
  }
  let numsArr = stringToNumList(req.query.nums);
  if (numsArr instanceof Error) {
    throw new ExpressError(numsArr.message);
  }

  let result = {
    operation: "mean",
    result: mean(numsArr)
  }

  return res.send(result);
});

app.get('/median', function (req, res) {
  if(!req.query.nums) {
    throw new ExpressError('Nums is required.', 400)
  }
  let numsArr = stringToNumList(req.query.nums);
  if (numsArr instanceof Error) {
    throw new ExpressError(numsArr.message);
  }

  let result = {
    operation: "median",
    result: median(numsArr)
  }

  return res.send(result);
});

app.get('/mode', function (req, res) {
  if(!req.query.nums) {
    throw new ExpressError('Nums is required.', 400)
  }
  let numsArr = stringToNumList(req.query.nums);
  if (numsArr instanceof Error) {
    throw new ExpressError(numsArr.message);
  }

  let result = {
    operation: "mode",
    result: mode(numsArr)
  }

  return res.send(result);
});

/** Start server on port 3000 */

app.listen(3000, function () {
  console.log('Server started on port 3000.');
});
