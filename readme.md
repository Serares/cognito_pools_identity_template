to build fe code run:

esbuild cognito-sdk.js \
 --bundle \
 --minify \
 --sourcemap \
 --define:global=window \
 --target=chrome90,firefox90,safari15 > ../web-app/public/cognito-sdk.js
