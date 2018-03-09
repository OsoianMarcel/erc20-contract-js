const chai = require('chai'),
	helper = require('./helper'),
	ERC20Contract = require('../index');

chai.should();

describe('Getters', function () {
	let contract;

	before(function () {
		contract = new ERC20Contract(helper.web3, helper.contractAddr);
	});

	describe('#getAddress()', function () {
		it('should return same contract address as address passed in constructor', function () {
			contract.getAddress().should.equal(helper.contractAddr);
		});
	});

	describe('#getWeb3()', function () {
		it('should return same instance of web3 as web3 passed in constructor', function () {
			contract.getWeb3().should.equal(helper.web3);
		});
	});

	describe('#getInstance()', function () {
		it('should return instance of web3.eth.Contract', function () {
			contract.getInstance().should.be.an.instanceof(helper.web3.eth.Contract);
		});
	});
});