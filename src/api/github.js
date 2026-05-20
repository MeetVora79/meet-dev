export async function fetchGithubRepos() {
  const response = await fetch(
    "https://api.github.com/users/MeetVora79/repos?sort=updated"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  return response.json();
}