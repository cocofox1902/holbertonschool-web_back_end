const request = require('request');
const chai = require('chai');
const expect = chai.expect;

const app = require('./api');

const url = 'http://localhost:7865';

describe('Index page', () => {
  it('status code 200', (done) => {
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('body is Welcome to the payment system', (done) => {
    request.get(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('response is a string', (done) => {
    request.get(url, (error, response, body) => {
      expect(typeof body).to.equal('string');
      done();
    });
  });

  it('response content type is text/html', (done) => {
    request.get(url, (error, response, body) => {
      expect(response.headers['content-type']).to.equal(
        'text/html; charset=utf-8'
      );
      done();
    });
  });

  it('server is started', () => {
    expect(app).to.not.be.null;
  });
});
