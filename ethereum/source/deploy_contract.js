Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
fs=require('fs');
code = fs.readFileSync('Voting.sol').toString()
solc = require('solc')
compiledCode = solc.compile(code)

abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
VotingContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':Voting'].bytecode
deployedContract = VotingContract.new(['Rama','Nick','Jose'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})

waitForContractAddress();

function waitForContractAddress () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
       console.log('contract address: %s',deployedContract.address)
      if (deployedContract.address==undefined) {
         waitForContractAddress();
      }
   }, 3000)
}
