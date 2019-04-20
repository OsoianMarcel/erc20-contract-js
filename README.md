# erc20-contract-js
Simple JS library used to manipulate with ERC-20 token contracts

[![Build Status](https://travis-ci.org/OsoianMarcel/erc20-contract-js.svg?branch=master)](https://travis-ci.org/OsoianMarcel/erc20-contract-js)
[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/erc20-contract-js)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/OsoianMarcel/erc20-contract-js/blob/master/LICENSE)

## Install

### NodeJS
```
yarn add erc20-contract-js
```
or
```
npm install erc20-contract-js
```

### Browser (from v1.3.0)
```
<!-- Unpkg CDN -->
<script src="https://unpkg.com/erc20-contract-js"></script>
```
or
```
<!-- Install the library via NPM/Yarn, then request it locally -->
<script src="/node_modules/dist/erc20-contract-js.min.js"></script>
```

## Example
```js
const Web3 = require('web3');
const ERC20Contract = require('erc20-contract-js');

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
```

## Testing

```bash
$ yarn test
```
or
```bash
$ npm test
```

## Contribute

Contributions to the package are always welcome!

* Report any bugs or issues you find on the [issue tracker].
* You can grab the source code at the package's [Git repository].

## Donation
Give me a Star if you like it!

## License

All contents of this package are licensed under the [MIT license].

[issue tracker]: https://github.com/OsoianMarcel/erc20-contract-js/issues
[Git repository]: https://github.com/OsoianMarcel/erc20-contract-js
[MIT license]: LICENSE
