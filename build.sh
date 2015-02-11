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


cp "$INSTALL_DIR/build/Release/ibac0n" ./ibac0n

echo "Build task complete!"