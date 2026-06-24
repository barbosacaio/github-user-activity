export async function fetchUserActivity(username: string) {
  const response = await fetch(
    `https://api.github.com/users/${username}/events`,
    {
      headers: {
        'User-Agent': 'github-user-activity',
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}
