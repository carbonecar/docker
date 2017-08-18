$ip=get-WmiObject Win32_NetworkAdapterConfiguration|Where {$_.Ipaddress.length -gt 1}
$ip=$ip.ipaddress[0]+":0"
$ip
#docker run -ti --rm --name=eclipse -u 1000:1000 
$command ="docker run -ti --rm --name=eclipse -u 1000:1000 -e DISPLAY=$ip -v /tmp/.X11-unix:/tmp/.X11-unix -v $(pwd)/Projects:/Projects -v $(pwd)/Projects/Eclipse/Workspace/mars:/workspace  nsa/eclipse:mars"
$command
iex $command
