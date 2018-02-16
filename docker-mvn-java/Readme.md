## JbossTools

https://stackoverflow.com/questions/31245959/how-to-add-jboss-server-in-eclipse

keytool -import -alias nexus-osde -keystore $JAVA_HOME/jre/lib/security/cacerts -file /workspace/repositorio.cer


### docker-compose-local.yml
Archivo de docker-compose para desarrollo local



docker run -it --rm -v $pwd/centrovalidador:/centrovalidador -v $pwd/.m2:/root/.m2 -w /centrovalidador/centroValidador-backend maven:3.2-jdk-7 mvn -s ../settings.xml clean install

docker run -it --rm -v $pwd/centrovalidador:/centrovalidador -v $pwd/.m2:/root/.m2 -w /centrovalidador/centroValidador-backend maven:3.2-jdk-8 mvn -s ../settings.xml clean install


docker run -it --rm -v $pwd/interfaz_paralelo:/interfaz_paralelo -v $pwd/.m2:/root/.m2 -w /interfaz_paralelo maven:3.2-jdk-8 mvn -s settings.xml clean install


docker run -it --rm -v $pwd/centrovalidador:/centrovalidador -v $pwd/.m2:/root/.m2 -w /centrovalidador/centroValidador-frontend maven:3.2-jdk-7 mvn -s ../settings.xml clean install


### Bugs conocidos
Se encuentran mensajes de errores con nullPointerException. Esto parece que ocurre cuando se agotan las conexiones arroja un error de nullPointerException al tratar de escribir en una cola, pero puede colocarlo en la cola de errores.
