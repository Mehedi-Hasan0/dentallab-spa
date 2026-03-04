import { describe, it, expect } from 'vitest';
import { newsletterSchema } from '@/schema/newsletter';

describe('newsletterSchema', () => {
  it('passes with a valid email address', () => {
    const result = newsletterSchema.safeParse({ email: 'user@example.com' });
    expect(result.success).toBe(true);
  });

  it('passes with various valid email formats', () => {
    const validEmails = [
      'user@domain.org',
      'user.name+tag@example.co.uk',
      'user123@sub.domain.com',
    ];
    for (const email of validEmails) {
      const result = newsletterSchema.safeParse({ email });
      expect(result.success).toBe(true);
    }
  });

  it('fails with an invalid email string', () => {
    const result = newsletterSchema.safeParse({ email: 'not-an-email' });
    expect(result.success).toBe(false);
    if (!result.success) {
      const err = result.error.issues.find((i) => i.path[0] === 'email');
      expect(err?.message).toBe('Please enter a valid email address');
    }
  });

  it('fails with an empty email string', () => {
    const result = newsletterSchema.safeParse({ email: '' });
    expect(result.success).toBe(false);
  });

  it('fails when email field is missing entirely', () => {
    const result = newsletterSchema.safeParse({});
    expect(result.success).toBe(false);
  });

  it('fails with email missing @ symbol', () => {
    const result = newsletterSchema.safeParse({ email: 'userexample.com' });
    expect(result.success).toBe(false);
  });

  it('fails with email missing domain', () => {
    const result = newsletterSchema.safeParse({ email: 'user@' });
    expect(result.success).toBe(false);
  });
});
