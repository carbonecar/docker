# Docker for ui
## Host configuration
Install xming https://sourceforge.net/projects/xming/
## Build
docker build -t tagname .

## Run in windows 10
 docker run -d -P --rm -e DISPLAY="iphost:0" --name x11test tagname  xeyes


 #### Explanation
 -t tagname : where tagname is the name of the tag for the docker image.
 -d run in deatached mode
 --rm makes the container ephemeral, this means that when you close the app, the container removes.
 -e create an enviroment variable named DISPLAY.
 --name the name of the container 
