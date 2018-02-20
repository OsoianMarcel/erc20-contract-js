const Web3 = require('web3');
const ERC20Contract = require('../ERC20Contract');

// Web3 instance
const web3 = new Web3(
	new Web3.providers.HttpProvider('https://mainnet.infura.io')
);

const walletAddr = '0x8d12a197cb00d4747a1fe03395095ce2a5cc6819', // EtherDelta contract address
	contractAddr = '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0'; // EOS contract address

// Create new instance of ERC20Contract
const erc20Contract = new ERC20Contract(web3, contractAddr);

// Get balance of
erc20Contract.balanceOf(walletAddr).call()
	.then(balance => console.log(`Balance: ${balance}`));

// Get total supply
erc20Contract.totalSupply().call()
	.then(totalBalance => console.log(`Total supply: ${totalBalance}`));

// Get allowance
erc20Contract.allowance(walletAddr, walletAddr).call()
	.then(allowance => console.log(`Allowance: ${allowance}`));