#!/bin/bash
set -e

python manage.py generate_swagger swagger.json

autorest --typescript \
	--input-file=swagger.json \
	--output-folder=./frontendclient \
	--license-header=MICROSOFT_MIT_NO_VERSION \
	--package-name=api \
	--package-version=0.1.0

rm -rf /frontend/src/swaggerapi
mv frontendclient/src /frontend/src/swaggerapi
rm -rf swagger.json frontendclient
