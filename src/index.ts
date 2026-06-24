#!/usr/bin/env node

const username = process.argv[2];

if (!username) {
  console.error('Usage: github-activity <username>');
  process.exit(1);
}

console.log(`Fetching activity for: ${username}...`);
// TODO: implement GitHub API call
