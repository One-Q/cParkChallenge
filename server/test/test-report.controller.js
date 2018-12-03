/*import sinon from 'sinon';
import chai, { expect } from 'chai';

import mongoose from 'mongoose'

import 'sinon-mongoose';

import { Report } from '../models/report';

describe('Get all reports', function() {
  it('should return all reports', function(done) {
    var ReportMock = sinon.mock(Report);
    var expectResult = {reports: []};
    ReportMock.expects('find').yield(null, expectResult);
    Report.find(function(err, result) {
      ReportMock.verify();
      ReportMock.restore();
      expect(expectResult.reports).to.be.an('array');
      done();
    })
  })
})

*/