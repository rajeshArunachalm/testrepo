git clone reponame

cd reponame

docker build -t imagename:latest .


docker run -d -p 5000:5000 imagename:latest

url : http://(localhostORip):5000
