#!/bin/sh
# run-server-tests.sh: Run all backend (server/) tests from anywhere in the project
cd "$(dirname "$0")/../server" && npx vitest run "$@"
