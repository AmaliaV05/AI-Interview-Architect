import { defineAuth } from '@aws-amplify/backend';
import { preSignUp } from './presignup/resource';

export const auth = defineAuth({
  loginWith: {
    email: true
   },
  triggers: {
    preSignUp: preSignUp
  }
});
