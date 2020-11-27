rm -rf dist/
mkdir -p dist/
cp ./package.json dist/
tsc -b tsconfig.build.json