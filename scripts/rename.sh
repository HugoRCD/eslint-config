#!/bin/bash

# Configurable values
replacement_string="<replacement_string>"
excluded_dirs=(node_modules dist .idea .vscode .git bun.lockb)

# Check if argument is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <replacement_string>"
    exit 1
fi

replacement_string=$1

# Find files excluding specified directories
files=$(grep -rl 'eslint-config' $(printf -- '--exclude-dir=%s ' "${excluded_dirs[@]}"))

for file in $files; do
    sed -i "" "s/eslint-config/$replacement_string/g" $file
    echo "Replaced 'eslint-config' with '$replacement_string' in $file"
done

echo "Replacement complete."
