module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
	development: {
	  host: "127.0.0.1",
	  port: 8545,
	  network_id: "*", // Match any network id
	  gas: 4600000,
	  from: '0xd2d88b5b05865937b4d79f775d072cc7369e6a8a'
	}
  }
};

