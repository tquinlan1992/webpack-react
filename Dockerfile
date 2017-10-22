FROM tquinlan1992/debian-nvm

COPY . /src/

RUN . /etc/profile && \
	cd /src && \
	nvm install && \
	npm install && \
    npm run build-client

EXPOSE 8000

CMD . /etc/profile \
    && cd /src \
    && nvm use \
    && npm run webpack-client-dev-server
