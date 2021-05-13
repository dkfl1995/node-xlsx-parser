var should = require('should');
var XLSXParser = require('../');
var fs = require('fs')

describe('xlsx to json', function() {

	it('should convert xlsx to json', function() {
		const {result, error} = new XLSXParser().xlsx_to_json('./sample/interview.xlsx');
		should.not.exist(error);
		result.should.be.an.instanceOf(Object);
	});

	it('should convert xlsx to csv', async function() {
		const {result, error} = await new XLSXParser().csv_to_json('./sample/partners.csv');
		console.log(result)
		should.not.exist(error);
		result.should.be.an.instanceOf(Object);
	});

})
