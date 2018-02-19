FROM ubuntu:17.10


run apt-get update && apt-get install -y nodejs npm  build-essential python git software-properties-common \
&& mkdir node_modules \
&& npm install ganache-cli web3@0.20.2 solc \
&& add-apt-repository -y ppa:ethereum/ethereum \
&& apt-get update \
&& apt-get install -y ethereum
