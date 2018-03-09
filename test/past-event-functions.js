const chai = require('chai'),
	chaiAsPromised = require('chai-as-promised'),
	helper = require('./helper'),
	ERC20Contract = require('../index');

chai.should();
chai.use(chaiAsPromised);

describe('Past event functions', function () {
	let contract;

	const firstTransferEventBlock = 1822694,
		firstApproveEventBlock = 1822852;

	before(function () {
		contract = new ERC20Contract(helper.web3, helper.contractAddr);
	});

	describe('#peTransfer()', function () {
		it('should return 1 events', function () {
			contract.peTransfer({fromBlock: firstTransferEventBlock, toBlock: firstApproveEventBlock})
				.should.eventually.have.lengthOf(1);
		});

		it('should return 0 events', function () {
			contract.peTransfer({fromBlock: 0, toBlock: firstTransferEventBlock - 1})
				.should.eventually.have.lengthOf(0);
		});
	});

	describe('#peTransfer()', function () {
		it('should return 1 events', function () {
			contract.peApproval({fromBlock: firstApproveEventBlock, toBlock: firstApproveEventBlock})
				.should.eventually.have.lengthOf(1);
		});
		it('should return 0 events', function () {
			contract.peApproval({fromBlock: 0, toBlock: firstApproveEventBlock - 1})
				.should.eventually.have.lengthOf(0);
		});
	});
});