## JbossTools

https://stackoverflow.com/questions/31245959/how-to-add-jboss-server-in-eclipse

````
keytool -import -alias nexus-osde -keystore $JAVA_HOME/jre/lib/security/cacerts -file /workspace/repositorio.cer
```

### Buildear el proyecto

```
docker run -it --rm -v $pwd/centrovalidador:/centrovalidador -v $pwd/.m2:/root/.m2 -w /centrovalidador/centroValidador-backend maven:3.2-jdk-7 mvn -s ../settings.xml clean install
```

```
docker run -it --rm -v $pwd/centrovalidador:/centrovalidador -v $pwd/.m2:/root/.m2 -w /centrovalidador/centroValidador-backend maven:3.2-jdk-8 mvn -s ../settings.xml clean install
```

```
docker run -it --rm -v $pwd/interfaz_paralelo:/interfaz_paralelo -v $pwd/.m2:/root/.m2 -w /interfaz_paralelo maven:3.2-jdk-8 mvn -s settings.xml clean install
```

```
docker run -it --rm -v $pwd/centrovalidador:/centrovalidador -v $pwd/.m2:/root/.m2 -w /centrovalidador/centroValidador-frontend maven:3.2-jdk-7 mvn -s ../settings.xml clean install
```

### Entorno de desarrollo
#### docker-compose_sin_ide.yml
Archivo de docker para levantar el entorno sin el IDE gráfico.
Se levanta así:
```
docker-compose -f docker-compose_sin_ide.yml up
```
Luego que este levanta se puede acceder al entorno ejecutando:
```
docker exec -it dockermvnjava_console_1 /bin/bash
```
