import { Validation } from '../../../core'

export const OAUTH_LOGIN_FORM = { 
    password: [Validation.Required],
    enrollment: [Validation.Required], 
}