const chai = require('chai'),
	chaiAsPromised = require('chai-as-promised'),
	helper = require('./helper'),
	ERC20Contract = require('../index');

chai.should();
chai.use(chaiAsPromised);

describe('Constant functions', function () {
	let contract;

	const totalSupply = '1000000000000000000000000';

	before(function () {
		contract = new ERC20Contract(helper.web3, helper.contractAddr);
	});

	describe('#totalSupply()', function () {
		it('should return total amount of tokens', function () {
			contract.totalSupply().call().should.eventually.equal(totalSupply);
		});
	});

	describe('#balanceOf()', function () {
		it('should return 0 (zero) balance', function () {
			contract.balanceOf('0x0').call().should.eventually.equal('0');
		});

		it('should return balance of wallet', function () {
			contract.balanceOf(helper.walletAddr).call().should.eventually.equal(totalSupply);
		});
	});

	describe('#allowance()', function () {
		it('should return 0 (zero) allowance', function () {
			contract.allowance('0x0', '0x0').call().should.eventually.equal('0');
		});

		it('should return expected allowance', function () {
			contract.allowance(helper.walletAddr, helper.walletAddr).call().should.eventually.equal('123456789000000000');
		});
	});
});