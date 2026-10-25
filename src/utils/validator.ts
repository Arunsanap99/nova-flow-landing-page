/**
 * Form validation utilities for landing page contact and newsletter forms.
 */

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  // Standard RFC 5322 simplified email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(trimmed);
}

export function validateRequired(value: string, minLength = 2): boolean {
  if (!value || typeof value !== 'string') return false;
  return value.trim().length >= minLength;
}

export function validateContactForm(data: {
  fullName?: string;
  email?: string;
  company?: string;
  message?: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!validateRequired(data.fullName || '', 2)) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  if (!validateEmail(data.email || '')) {
    errors.email = 'Please provide a valid work email address.';
  }

  if (!validateRequired(data.message || '', 10)) {
    errors.message = 'Please include a message with at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
