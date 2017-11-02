FROM ubuntu:14.04

RUN apt-get update && apt-get install -y wget unzip

RUN wget -O jboss-4.2.3.GA.zip https://www.dropbox.com/s/canm3d9dabjri6w/jboss-4.2.3.GA.zip?dl=0
RUN wget -O wmq.jmsra.rar https://www.dropbox.com/s/xlo164f9rhoutml/wmq.jmsra.rar?dl=0
RUN unzip jboss-4.2.3.GA.zip

RUN chmod -R a+rw /jboss-4.2.3.GA

RUN rm jboss-4.2.3.GA.zip

RUN mv wmq.jmsra.rar /jboss-4.2.3.GA/server/all/deploy
