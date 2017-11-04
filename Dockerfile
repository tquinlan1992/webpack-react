FROM node:carbon

COPY . /client-app/

RUN cd /client-app && \
	npm install && \
	npm test -- --coverage && \
    npm run build-client

EXPOSE 8000

CMD cd /client-app \
    && npm run dev-server
