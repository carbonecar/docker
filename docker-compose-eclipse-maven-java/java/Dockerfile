FROM ubuntu:14.04

RUN apt-get update && apt-get install -y wget software-properties-common python-software-properties

RUN add-apt-repository -y ppa:webupd8team/java && \
  apt-get update && \
  echo "oracle-java8-installer shared/accepted-oracle-license-v1-1 select true" | sudo debconf-set-selections && \
  apt-get install -y oracle-java7-installer && \
  rm -rf /var/lib/apt/lists/* && \
  rm -rf /var/cache/oracle-jdk7-installer

#http://download.oracle.com/otn/java/jdk/7u80-b15/jdk-7u80-linux-x64.tar.gz
#RUN wget https://github.com/cwahl-Treeptik/jdev-env-java/releases/download/v0.1/java-bin.tar && tar -xvf java-bin.tar -C /opt && rm java-bin.tar
