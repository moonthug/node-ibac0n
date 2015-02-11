#!/bin/bash

cd bin/ibac0n-src

echo "Building project..."
xcodebuild

cd ..

cp ./ibac0n-src/build/Release/ibac0n ./ibac0n

echo "Build task complete!"