import { fetchUserActivity } from './api';
import { GitHubEvent } from './types';

export async function formatOutput(username: string) {
  const events = await fetchUserActivity(username);

  const pushes: GitHubEvent[] = [];
  const issues: GitHubEvent[] = [];
  const pulls: GitHubEvent[] = [];

  for (const event of events) {
    switch (event.type) {
      case 'PushEvent':
        pushes.push(event);
        break;
      case 'IssuesEvent':
        issues.push(event);
        break;
      case 'PullRequestEvent':
        pulls.push(event);
        break;
      default:
        break;
    }
  }

  return `
        The user ${username} has recently:
        - Pushed ${pushes.length} commits
        - Opened ${issues.length} issues
        - Opened ${pulls.length} pull requests
    `;
}
