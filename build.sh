#!/bin/bash

INSTALL_DIR="./bin/ibac0n-src"

if [ "$(ls -A $INSTALL_DIR)" ]; then
    echo "Project was cloned, nothing to do here..."
else
    echo "Building project..."
    git clone https://github.com/moonthug/ibac0n.git $INSTALL_DIR
fi

cd $INSTALL_DIR

echo "Building project..."
xcodebuild

ls -lsa

cp "./build/Release/ibac0n" ../ibac0n

echo "Build task complete!"