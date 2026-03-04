import { describe, it, expect } from 'vitest';
import { contactFormSchema } from '@/schema/contact';

const validData = {
  name: 'John Doe',
  practice: 'Smile Dental',
  email: 'john@example.com',
  phone: '1234567890',
  message: 'I have a patient who needs a crown.',
};

describe('contactFormSchema', () => {
  it('passes with all valid inputs', () => {
    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('fails when name is less than 2 characters', () => {
    const result = contactFormSchema.safeParse({ ...validData, name: 'J' });
    expect(result.success).toBe(false);
    if (!result.success) {
      const nameError = result.error.issues.find((i) => i.path[0] === 'name');
      expect(nameError?.message).toBe('Name must be at least 2 characters.');
    }
  });

  it('fails when practice is less than 2 characters', () => {
    const result = contactFormSchema.safeParse({ ...validData, practice: 'S' });
    expect(result.success).toBe(false);
    if (!result.success) {
      const err = result.error.issues.find((i) => i.path[0] === 'practice');
      expect(err?.message).toBe('Practice name must be at least 2 characters.');
    }
  });

  it('fails when email is invalid', () => {
    const result = contactFormSchema.safeParse({ ...validData, email: 'not-an-email' });
    expect(result.success).toBe(false);
    if (!result.success) {
      const err = result.error.issues.find((i) => i.path[0] === 'email');
      expect(err?.message).toBe('Please enter a valid email address.');
    }
  });

  it('fails when phone is less than 10 characters', () => {
    const result = contactFormSchema.safeParse({ ...validData, phone: '123' });
    expect(result.success).toBe(false);
    if (!result.success) {
      const err = result.error.issues.find((i) => i.path[0] === 'phone');
      expect(err?.message).toBe('Please enter a valid phone number.');
    }
  });

  it('fails when message is less than 10 characters', () => {
    const result = contactFormSchema.safeParse({ ...validData, message: 'Too short' });
    expect(result.success).toBe(false);
    if (!result.success) {
      const err = result.error.issues.find((i) => i.path[0] === 'message');
      expect(err?.message).toBe('Message must be at least 10 characters.');
    }
  });

  it('reports errors for all fields when all are empty strings', () => {
    const result = contactFormSchema.safeParse({
      name: '',
      practice: '',
      email: '',
      phone: '',
      message: '',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.length).toBeGreaterThanOrEqual(5);
    }
  });
});
