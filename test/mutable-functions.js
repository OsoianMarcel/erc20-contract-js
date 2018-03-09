const chai = require('chai'),
	chaiAsPromised = require('chai-as-promised'),
	helper = require('./helper'),
	ERC20Contract = require('../index');

chai.should();
chai.use(chaiAsPromised);

describe('Mutable functions (check exceptions)', function () {
	let contract;

	const testAmount = '1000000000000000000';

	before(function () {
		contract = new ERC20Contract(helper.web3, helper.contractAddr);
	});

	describe('#transfer()', function () {
		it('should not throw exception', function () {
			(function () {
				contract.transfer(helper.walletAddr, testAmount);
			}).should.to.not.throw();
		});
	});

	describe('#transferFrom()', function () {
		it('should not throw exception', function () {
			(function () {
				contract.transferFrom(helper.walletAddr, helper.walletAddr, testAmount);
			}).should.to.not.throw();
		});
	});

	describe('#approve()', function () {
		it('should not throw exception', function () {
			(function () {
				contract.approve(helper.walletAddr, testAmount);
			}).should.to.not.throw();
		});
	});
});