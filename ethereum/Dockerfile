FROM ubuntu:16.04

run apt upgrade
run apt update
run apt-get install -y curl python-software-properties
run curl -sL https://deb.nodesource.com/setup_9.x | bash -
run apt-get install -y nodejs
run apt-get install -y build-essential git software-properties-common \
&& mkdir node_modules \
&& npm install ganache-cli web3@0.20.2 solc \
&& add-apt-repository -y ppa:ethereum/ethereum \
&& apt update \
&& apt-get install -y ethereum
