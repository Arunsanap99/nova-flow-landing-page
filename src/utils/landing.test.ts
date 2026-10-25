import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEmail, validateRequired, validateContactForm } from './validator';
import { easeOutCubic, calculateCounterStep, formatStatValue } from './counter';

test('validateEmail correctly validates standard email formats', () => {
  assert.equal(validateEmail('alex@company.com'), true);
  assert.equal(validateEmail('sarah.miller@subdomain.example.org'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail('test@'), false);
  assert.equal(validateEmail('@domain.com'), false);
  assert.equal(validateEmail(''), false);
});

test('validateRequired validates strings with minLength constraints', () => {
  assert.equal(validateRequired('John', 2), true);
  assert.equal(validateRequired(' A ', 2), false); // trimmed is 1 char
  assert.equal(validateRequired('', 1), false);
});

test('validateContactForm checks required fields and returns errors', () => {
  const invalidForm = validateContactForm({
    fullName: '',
    email: 'bad-email',
    message: 'hi',
  });
  assert.equal(invalidForm.isValid, false);
  assert.ok(invalidForm.errors.fullName);
  assert.ok(invalidForm.errors.email);
  assert.ok(invalidForm.errors.message);

  const validForm = validateContactForm({
    fullName: 'David Vance',
    email: 'david@enterprise.io',
    message: 'We are looking to scale our real-time event pipeline.',
  });
  assert.equal(validForm.isValid, true);
  assert.equal(Object.keys(validForm.errors).length, 0);
});

test('easeOutCubic computes correct bounds', () => {
  assert.equal(easeOutCubic(0), 0);
  assert.equal(easeOutCubic(1), 1);
  assert.ok(easeOutCubic(0.5) > 0.5); // Ease out is fast at first, slows down
});

test('calculateCounterStep animates smoothly to target', () => {
  assert.equal(calculateCounterStep(0, 100, 0), 0);
  assert.equal(calculateCounterStep(0, 100, 1), 100);
  assert.equal(calculateCounterStep(0, 99.99, 1, 2), 99.99);
});

test('formatStatValue produces correctly decorated strings', () => {
  assert.equal(formatStatValue(10, '', 'M+'), '10M+');
  assert.equal(formatStatValue(99.99, '', '%', 2), '99.99%');
  assert.equal(formatStatValue(12000, '', '+'), '12,000+');
  assert.equal(formatStatValue(1.2, '< ', 'ms', 1), '< 1.2ms');
});

import { normalizeToastOptions, buildReceiptConfirmationToast } from './toast';

test('normalizeToastOptions parses string message with defaults', () => {
  const toast = normalizeToastOptions('Switched to dark mode', 'info');
  assert.equal(toast.message, 'Switched to dark mode');
  assert.equal(toast.type, 'info');
  assert.equal(toast.title, 'Notice');
  assert.equal(toast.duration, 4000);
  assert.equal(toast.showProgress, true);
  assert.ok(toast.id.startsWith('toast-'));
});

test('normalizeToastOptions accepts full object and preserves overrides', () => {
  const toast = normalizeToastOptions({
    title: 'Custom Title',
    message: 'Operation succeeded',
    type: 'success',
    duration: 6000,
  });
  assert.equal(toast.title, 'Custom Title');
  assert.equal(toast.message, 'Operation succeeded');
  assert.equal(toast.type, 'success');
  assert.equal(toast.duration, 6000);
});

test('buildReceiptConfirmationToast formats personalized receipt details', () => {
  const toast = buildReceiptConfirmationToast({
    fullName: 'Elena Fisher',
    email: 'elena@unicef-data.org',
  });
  assert.equal(toast.title, 'Receipt Confirmed');
  assert.equal(toast.type, 'success');
  assert.ok(toast.message.includes('Elena'));
  assert.ok(toast.message.includes('elena@unicef-data.org'));
  assert.ok(toast.message.includes('confirmed receipt'));
});

