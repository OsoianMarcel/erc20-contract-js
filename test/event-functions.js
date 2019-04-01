const chai = require('chai'),
	helper = require('./helper'),
	ERC20Contract = require('../index');

chai.should();

describe('Event functions', function () {
	let contract;

	before(function () {
		contract = new ERC20Contract(helper.web3, helper.contractAddr);
	});

	describe('#onTransfer()', function () {
		if (helper.web3.currentProvider.constructor.name === 'HttpProvider') {
			return;
		}

		it('should return an object with property "on"', function () {
			contract.onTransfer().should.have.property('on');
		});
	});

	describe('#onApproval()', function () {
		if (helper.web3.currentProvider.constructor.name === 'HttpProvider') {
			return;
		}

		it('should return an object with property "on"', function () {
			contract.onApproval().should.have.property('on');
		});
	});
});
