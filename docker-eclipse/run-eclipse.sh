docker run -ti \
           --rm \
           --name=eclipse \
           -u 1000:1000 \
           -e DISPLAY=$DISPLAY \
           -v /tmp/.X11-unix:/tmp/.X11-unix \
           -v ~/Projects:/Projects \
           -v ~/Projects/Eclipse/Workspace/mars:/workspace \
           -v /etc/passwd:/etc/passwd \
           nsa/eclipse:mars
