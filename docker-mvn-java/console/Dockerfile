FROM ubuntu:14.04
RUN apt-get update && apt-get install -y subversion git

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



ENV JAVA_HOME /usr/lib/jvm/java-8-oracle
ENV MVN_HOME /apache-maven/bin
ENV PATH $PATH:$JAVA_HOME/bin:$MVN_HOME

#CMD /bin/bash
