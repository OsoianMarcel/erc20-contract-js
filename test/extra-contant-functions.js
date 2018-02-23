const chai = require('chai'),
	chaiAsPromised = require('chai-as-promised'),
	helper = require('./helper'),
	ERC20Contract = require('../index');

chai.should();
chai.use(chaiAsPromised);

describe('Extra constant functions', function () {
	let contract;

	before(function() {
		contract = new ERC20Contract(helper.web3, helper.contractAddr);
	});

	describe('#decimals()', function () {
		it('should return token decimals', function () {
			contract.decimals().call().should.eventually.equal('18');
		});
	});

	describe('#symbol()', function () {
		it('should return token symbol', function () {
			contract.symbol().call().should.eventually.equal('OMD');
		});
	});

	describe('#name()', function () {
		it('should return token name', function () {
			contract.name().call().should.eventually.equal('Osoian Marcel Dumitru Token');
		});
	});
});