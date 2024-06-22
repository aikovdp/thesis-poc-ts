import { expect, test } from 'vitest'
import { getDbUser } from '../../src/actions/get-db-user'
import { createContext } from '../../src/context'

test('returns jsmith user', async () => {
  const user = await getDbUser({username: "jsmith"}, createContext())

  expect(user).toEqual({                                                                                                                                                 
    id: 1,                                                                                                                                          
    givenName: 'John',
    familyName: 'Smith',
    username: 'jsmith',
    email: 'jsmith@example.org'
  })
})
