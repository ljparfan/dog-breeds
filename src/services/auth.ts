import { EmailValidationResponse } from "../models/emailValidationResponse";
import { abstractApiHttpClient } from "./http";

export function validateEmail(email: string) {
  return abstractApiHttpClient
    .get<EmailValidationResponse>(`/`, {
      params: {
        api_key: import.meta.env.VITE_ABSTRACT_EMAIL_VALIDATION_KEY,
        email,
      },
    })
    .then((response) => response.data);
}
