#!/bin/bash
ng build --prod --aot --deploy-url /cc-webui-angular/
aws s3 cp ./dist/webui s3://cc-webui-angular --recursive --acl public-read
