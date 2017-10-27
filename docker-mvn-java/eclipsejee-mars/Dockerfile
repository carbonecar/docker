FROM ubuntu:14.04

RUN apt-get update && apt-get install -y libgtk2.0-0 libcanberra-gtk-module libxext-dev libxrender-dev libxtst-dev wget libwebkitgtk-3.0-0

RUN export uid=1000 gid=1000 && \
    mkdir -p /home/javadev && \
    echo "javadev:x:${uid}:${gid}:JavaDev,,,:/home/javadev:/bin/bash" >> /etc/passwd && \
    echo "javadev:x:${uid}:" >> /etc/group && \
    echo "javadev ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/javadev && \
    chmod 0440 /etc/sudoers.d/javadev && \
    chown ${uid}:${gid} -R /home/javadev



USER javadev
WORKDIR /home/javadev

RUN ln -s /workspace workspace
RUN ln -s /workspace/.m2 .m2

RUN wget http://eclipse.c3sl.ufpr.br/technology/epp/downloads/release/mars/2/eclipse-jee-mars-2-linux-gtk-x86_64.tar.gz -O /tmp/eclipse.tar.gz -q && \
    echo 'Installing eclipse' && \
    mkdir eclipse-bin && \
    tar -xf /tmp/eclipse.tar.gz -C eclipse-bin && \
    rm /tmp/eclipse.tar.gz

ENV JAVA_HOME /usr/lib/jvm/java-8-oracle
ENV MVN_HOME /apache-maven/bin
ENV PATH $PATH:$JAVA_HOME/bin:$MVN_HOME

CMD eclipse-bin/eclipse/eclipse
#CMD /bin/bash
