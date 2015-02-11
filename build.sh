#!/bin/bash

if [ ! -d "./bin/ibac0n-src" ]; then
    git clone https://github.com/moonthug/ibac0n.git ./bin/ibac0n-src
fi

cd bin/ibac0n-src

echo "Building project..."
xcodebuild

cd ..

cp ./ibac0n-src/build/Release/ibac0n ./ibac0n

echo "Build task complete!"