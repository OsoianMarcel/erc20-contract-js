const ERC20Abi = require('./ERC20Abi');

/**
 * Class used to manipulate with ERC-20 token contracts
 */
class ERC20Contract {
	/**
	 * Constructor
	 *
	 * @param {Web3} web3 Web3 instance
	 * @param {string} contractAddr Contract address
	 */
	constructor(web3, contractAddr) {
		this._web3 = web3;
		this._address = contractAddr;

		this._contractInst = new this._web3.eth.Contract(ERC20Abi, this._address);
	}

	/**
	 * Get contract address
	 *
	 * @return {string}
	 */
	getAddress() {
		return this._address;
	}

	/**
	 * Get contract instance
	 *
	 * @return {Contract}
	 */
	getInstance() {
		return this._contractInst;
	}

	/**
	 * Get Web3 instance
	 *
	 * @return {Web3}
	 */
	getWeb3() {
		return this._web3;
	}

	/**
	 * Get total amount of tokens
	 * .call()
	 *
	 * @return {TransactionObject} Total supply
	 */
	totalSupply() {
		return this._contractInst.methods['totalSupply']();
	}

	/**
	 * Get the token balance of account
	 *
	 * @param {string} walletAddr The address from which the balance will be retrieved
	 * @return {TransactionObject} The balance
	 */
	balanceOf(walletAddr) {
		return this._contractInst.methods['balanceOf'](walletAddr);
	}

	/**
	 * Get amount of remaining tokens allowed to spent
	 *
	 * @param {string} walletAddr The address of the account owning tokens
	 * @param {string} spenderAddr The address of the account able to transfer the tokens
	 * @return {TransactionObject} Amount of remaining tokens allowed to spent
	 */
	allowance(walletAddr, spenderAddr) {
		return this._contractInst.methods['allowance'](walletAddr, spenderAddr);
	}

	/**
	 * Send "value" amount of tokens to address "toAddr"
	 *
	 * @param {string} toAddr The address of the recipient
	 * @param {string} value The amount of token to be transferred
	 * @return {TransactionObject} Whether the transfer was successful or not
	 */
	transfer(toAddr, value) {
		return this._contractInst.methods['transfer'](toAddr, value);
	}

	/**
	 * Send "value" amount of tokens from address "fromAddr" to address "toAddr"
	 *
	 * @param {string} fromAddr The address of the sender
	 * @param {string} toAddr The address of the recipient
	 * @param {string} value The amount of token to be transferred
	 * @return {TransactionObject} Whether the transfer was successful or not
	 */
	transferFrom(fromAddr, toAddr, value) {
		return this._contractInst.methods['transferFrom'](fromAddr, toAddr, value);
	}

	/**
	 * Allow "spenderAddr" to withdraw from your account, multiple times, up to the "value" amount
	 *
	 * @param {string} spenderAddr The address of the account able to transfer the tokens
	 * @param {string} value The amount of wei to be approved for transfer
	 * @return {TransactionObject} Whether the approval was successful or not
	 */
	approve(spenderAddr, value) {
		return this._contractInst.methods['approve'](spenderAddr, value);
	}

	/**
	 * Triggered when tokens are transferred
	 *
	 * @return {EventEmitter}
	 */
	onTransfer() {
		return this._contractInst.events['Transfer']();
	}

	/**
	 * Triggered whenever approve is called
	 *
	 * @return {EventEmitter}
	 */
	onApproval() {
		return this._contractInst.events['Approval']();
	}
}

module.exports = ERC20Contract;