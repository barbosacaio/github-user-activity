#!/usr/bin/env node
import { formatOutput } from './formatter';

async function main() {
  const username = process.argv[2];

  if (!username) {
    console.error('Usage: github-activity <username>');
    process.exit(1);
  }

  const result = await formatOutput(username);
  console.log(result);
}

main().catch(console.error);
