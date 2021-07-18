FROM cypress/base:10 as TEST
WORKDIR /app
COPY . .
RUN npm install
RUN npm run test:run
RUN npm run report:generate

FROM busybox as REPORT
COPY --from=TEST /cypress/reports/ /public