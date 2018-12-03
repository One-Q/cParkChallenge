import mongoose, { mongo } from 'mongoose';
import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';

import app from '../index';

chai.config.includeStack = true;

after((done) => {
  mongoose.model = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
})

describe('## Report API', () => {

  let report = {
    "title": "",
    "time": "2018-11-29",
    "position": {
      "lat": 50,
      "long": 10
    }
  }

  describe('# Post /report', () => {
    it('should create a new report', (done) => {
      let newReport = report;
      newReport.title = 'My Title';
      request(app)
        .post('/report')
        .send(newReport)
        .expect(201)
        .then((res) => {
          expect(res.body.report.title).to.equal(report.title);
          done();
        })
        .catch(done);
    })

    it('should report an error - Please enter a title', (done) => {
      let newReport = report;
      newReport.title = '';
      request(app)
        .post('/report')
        .send(newReport)
        .expect(400)
        .then((res) => {
          expect(res.body.error).to.equal('Please enter a title');
          done();
        })
        .catch(done);
    })
  })

  describe('# GET /report/:lat/:long', () => {
    it('should get a list', (done) => {
      request(app)
        .get('/report/50/10')
        .expect(200)
        .then((res) => {
          expect(res.body.reports).to.be.an('array');
          done();
        })
        .catch(done);
    })

    it('should report an error - The lat must be between -90 and 90. The long must be between -180 and 180', (done) => {
      request(app)
        .get('/report/-180/10')
        .expect(400)
        .then((res) => {
          expect(res.body.error).to.equal('The lat must be between -90 and 90. The long must be between -180 and 180')
          done();
        })
        .catch(done);
    })
  })

})