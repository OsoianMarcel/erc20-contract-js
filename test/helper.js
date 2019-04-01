const Web3 = require('web3');

const providerUrl = 'https://rinkeby.infura.io/v3/cedd93f1107c450c8dc53f10016868ef',
	web3 = new Web3(providerUrl),
	contractAddr = '0x3F05C7ed28dDB9d632F61421d6A3AfE9E5476521',
	walletAddr = '0x71bAa3295d80F50bA0629d3C69aCd2bBb651dA91';

module.exports = {
	web3,
	contractAddr,
	walletAddr
};
