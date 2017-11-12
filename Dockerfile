FROM tquinlan1992/debian-nvm

COPY . /client-app/

RUN . /etc/profile && \
	cd /client-app && \
	nvm install && \
	npm install && \
	npm test -- --coverage && \
    npm run build-client

EXPOSE 8000

CMD . /etc/profile && \
	cd /client-app && \
	nvm use && \
    npm start
