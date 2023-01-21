export interface EmailValidationResponse {
  email: string;
  autocorrect: string;
  deliverability: "DELIVERABLE" | "UNDELIVERABLE";
  quality_score: string;
  is_valid_format: BooleanKeyValuePair;
  is_free_email: BooleanKeyValuePair;
  is_disposable_email: BooleanKeyValuePair;
  is_role_email: BooleanKeyValuePair;
  is_catchall_email: BooleanKeyValuePair;
  is_mx_found: BooleanKeyValuePair;
  is_smtp_valid: BooleanKeyValuePair;
}

export interface BooleanKeyValuePair {
  value: boolean;
  text: string;
}
