FROM node:16.20.0-alpine

RUN npm install -g @nestjs/cli@10.0.0

RUN apk add --no-cache bash git

RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

RUN mkdir -p /home/node/consume-email-nest

COPY . /home/node/consume-email-nest

RUN chown -R 777 /home/node/consume-email-nest

USER node

WORKDIR /home/node/consume-email-nest


