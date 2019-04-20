const chai = require('chai'),
	helper = require('./helper'),
	ERC20Contract = require('../index');

chai.should();

describe('Constructor', function () {
	describe('#constructor()', function () {
		it('should throw error if first param is not a Web3 instance', function () {
			(function () {
				new ERC20Contract({});
			}).should.throw('First parameter should be a Web3 instance');
		});

		it('should throw error if second param is not a valid Ethereum address', function () {
			(function () {
				new ERC20Contract(helper.web3, '0xI_Want_To_Be_A_Valid_Ethereum_Address');
			}).should.throw('Second parameter should be a valid Ethereum address');
		});
	});
});
