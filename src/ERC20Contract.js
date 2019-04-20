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
	 * @param {Array|null} [contractAbi=null] Contract ABI (optional)
	 */
	constructor(web3, contractAddr, contractAbi = null) {
		if (typeof web3 !== 'object'
			|| typeof web3.eth !== 'object'
			|| typeof web3.eth.Contract !== 'function'
		) {
			throw new Error('First parameter should be a Web3 instance');
		}

		if (!/^0x[0-9a-f]{40}$/i.test(contractAddr)) {
			throw new Error('Second parameter should be a valid Ethereum address');
		}

		this._web3 = web3;
		this._address = contractAddr;

		const abi = contractAbi !== null ? contractAbi : ERC20Abi;

		this._contractInst = new this._web3.eth.Contract(abi, this._address);
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
	 *
	 * function totalSupply() public constant returns (uint)
	 *
	 * @return {TransactionObject} Total supply
	 */
	totalSupply() {
		return this._contractInst.methods['totalSupply']();
	}

	/**
	 * Get the token balance of account
	 *
	 * function balanceOf(address tokenOwner) public constant returns (uint balance)
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
	 * function allowance(address tokenOwner, address spender) public constant returns (uint remaining)
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
	 * function transfer(address to, uint tokens) public returns (bool success)
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
	 * function transferFrom(address from, address to, uint tokens) public returns (bool success)
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
	 * function approve(address spender, uint tokens) public returns (bool success)
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
	 * event Transfer(address indexed from, address indexed to, uint tokens)
	 *
	 * @param {Object} [options] The options used for deployment
	 * @return {EventEmitter}
	 */
	onTransfer(options) {
		return this._contractInst.events['Transfer'](options);
	}

	/**
	 * Triggered whenever approve is called
	 *
	 * event Approval(address indexed tokenOwner, address indexed spender, uint tokens)
	 *
	 * @param {Object} [options] The options used for deployment
	 * @return {EventEmitter}
	 */
	onApproval(options) {
		return this._contractInst.events['Approval'](options);
	}

	/**
	 * Get past transfer events
	 *
	 * @param {Object} [options] The options used for deployment
	 * @return {Promise<EventLog[]>}
	 */
	peTransfer(options) {
		return this._contractInst.getPastEvents('Transfer', options);
	}

	/**
	 * Get past approval events
	 *
	 * @param {Object} [options] The options used for deployment
	 * @return {Promise<EventLog[]>}
	 */
	peApproval(options) {
		return this._contractInst.getPastEvents('Approval', options);
	}

	/**
	 * Get token decimals
	 * Warning: This function is not part of ERC20 interface, so it may fail if contract does not has it
	 *
	 * uint8 public constant decimals
	 *
	 * @return {TransactionObject} Token decimals
	 */
	decimals() {
		return this._contractInst.methods['decimals']();
	}

	/**
	 * Get token symbol
	 * Warning: This function is not part of ERC20 interface, so it may fail if contract does not has it
	 *
	 * string public constant symbol
	 *
	 * @return {TransactionObject} Token symbol
	 */
	symbol() {
		return this._contractInst.methods['symbol']();
	}

	/**
	 * Get token name
	 * Warning: This function is not part of ERC20 interface, so it may fail if contract does not has it
	 *
	 * string public constant name
	 *
	 * @return {TransactionObject} Token name
	 */
	name() {
		return this._contractInst.methods['name']();
	}
}

module.exports = ERC20Contract;