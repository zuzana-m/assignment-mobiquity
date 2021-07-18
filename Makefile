install:
	@make install-dependencies

install-dependencies:
	@npm install

run-tests-no-browser:
	@npm run test:run

run-tests-with-browser:
	@npm run test:open

generate-report:
	@npm run report:generate