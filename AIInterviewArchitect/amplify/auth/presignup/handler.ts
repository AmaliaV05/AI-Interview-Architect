import { PreSignUpTriggerHandler } from "aws-lambda";

export const handler: PreSignUpTriggerHandler = async (event) => {
  const email = event.request.userAttributes['email'];
  const domain = email.split('@')[1];

  if (!email.toLowerCase().endsWith('@hotmail.com')) {
    const errorMessage = `Invalid email domain (${domain}). Please use an @hotmail.com email address.`;

    throw new Error(errorMessage);
  }

  return event;
};
