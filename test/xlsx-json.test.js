var should = require('should');
var XLSXParser = require('../');
var fs = require('fs')

describe('xlsx to json', function() {

	it('should convert xlsx to json', function() {
		const {result, error} = new XLSXParser().xlsx_to_json({
			input: './sample/test_data.xlsx'
		});
		should.not.exist(error);
		result.should.be.an.instanceOf(Object);
	});

})
