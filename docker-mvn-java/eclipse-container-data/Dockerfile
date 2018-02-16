FROM ubuntu:14.04
ARG svn_user
ARG svn_pass

ADD subversion_conf/.subversion /root/.subversion
RUN apt-get update && apt-get install -y wget unzip git subversion


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


RUN sudo svn --username ${svn_user} --password ${svn_pass} co "http://repositorio.osde.ar/MG01_ASIS/trunk/Otorgamiento del Servicio/Proyecto - Otorgamiento del Servicio/Proyecto - Centro Validador/Construccion/fuentes/interfaz-paralelo" /workspace/interfaz_paralelo

#RUN svn --username MT27789605 --password jenkins11 co "http://repositorio.osde.ar/MG01_ASIS/trunk/Otorgamiento del Servicio/Proyecto - Otorgamiento del Servicio/Proyecto - Centro Validador/Construccion/fuentes/interfaz-paralelo"
