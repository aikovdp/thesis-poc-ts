export const getGitHubUserAction: Action<GetGitHubUserActionInput, GithubUser> = async (input) => {

  const res = await fetch(`https://api.github.com/users/${input.username}`)

  return res.json();
}

interface GetGitHubUserActionInput {
  username: string
}

interface GithubUser {
  login: string,
  type: string,
  name: string,
  company: string,
  location: string,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number
}

