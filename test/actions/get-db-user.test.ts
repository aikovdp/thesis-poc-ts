import { expect, test } from 'vitest'
import { getDbUser } from '../../src/actions/get-db-user'

test('returns jsmith user', async () => {
  const user = await getDbUser({username: "jsmith"})

  expect(user).toEqual({                                                                                                                                                 
    id: 1,                                                                                                                                          
    givenName: 'John',
    familyName: 'Smith',
    username: 'jsmith',
    email: 'jsmith@example.org'
  })
})
