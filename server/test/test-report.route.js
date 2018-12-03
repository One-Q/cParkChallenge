import chai, { expect } from 'chai';

import { listReports } from '../controllers/report.controller';

let req = {
  body: {

  },
  params: {
    lat: 50,
    long: 10
  }
}

let res = {
  reports: [],
  json: function(arg) {
    this.reports = arg
  }
}

describe('Report Route', () => {
  
  describe('Get list', () => {
    it('should return an object with reports', () => {
      listReports(req, res);
      expect(res.reports).to.be.an('array');
    })
  })

})