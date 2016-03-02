var request = require('supertest');
var app = require('../app');

describe('urlrar app', function () {
  before(function (done) {
    app.listen(0, done);
  });