# Docker for ui
## Host configuration
Install xming https://sourceforge.net/projects/xming/
## Build
docker build -t tagname .

## Run in windows 10
 docker run -d -P --rm -e DISPLAY="iphost:0" --name x11test tagname  xeyes


 #### Explanation
 -t tagname : where tagname is the name of the tag for the docker image.

 -d run in deatached mode.

 --rm makes the container ephemeral, this means that when you close the app, the container removes.

 -e create an enviroment variable named DISPLAY.

 --name the name of the container.

## Run in mac
Copy in .bash_profile
    ip=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}')

give access to this ip
    xhost $ip

run the docker command

    docker run -it -P -v /tmp/.X11-unix:/tmp/.X11-unix -P --rm -e DISPLAY=$ip:0 --name x11test x11forward xeyes

if the command from above doesn't work try this and execute the docker run again>
    socat TCP-LISTEN:6000,reuseaddr,fork UNIX-CLIENT:\"$DISPLAY\" &
