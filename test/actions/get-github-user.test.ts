import { expect, test } from 'vitest'
import { getGitHubUserAction } from '../../src/actions/get-github-user'
import { createContext } from '../../src/context'

test('returns octocat user', async () => {
  const user = await getGitHubUserAction({username: "octocat"}, createContext())
  
  expect(user.login, "octocat")
  expect(user.name, "The Octocat")
  expect(user.company, "@github")
})
