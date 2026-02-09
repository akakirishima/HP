import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL as string | undefined;
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
const ENTRY_NAME = 'entry.38999424';
const ENTRY_EMAIL = 'entry.1971939833';
const ENTRY_MESSAGE = 'entry.627766901';

type FormStatus =
  | 'idle'
  | 'sending'
  | 'success'
  | 'error'
  | 'config_error'
  | 'unconfirmed';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const statusTimeoutRef = useRef<number | null>(null);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const clearStatusTimeout = () => {
    if (statusTimeoutRef.current !== null) {
      window.clearTimeout(statusTimeoutRef.current);
      statusTimeoutRef.current = null;
    }
  };

  const setTemporaryStatus = (nextStatus: Exclude<FormStatus, 'idle' | 'sending'>) => {
    clearStatusTimeout();
    setStatus(nextStatus);
    statusTimeoutRef.current = window.setTimeout(() => {
      setStatus('idle');
      statusTimeoutRef.current = null;
    }, 5000);
  };

  useEffect(() => {
    return () => {
      clearStatusTimeout();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    if (honeypot) return;
    if (!formData.name || !formData.email || !formData.message || !emailPattern.test(formData.email)) {
      setTemporaryStatus('error');
      return;
    }

    const endpoint = CONTACT_ENDPOINT?.trim();
    if (!endpoint) {
      setTemporaryStatus('config_error');
      return;
    }

    try {
      clearStatusTimeout();
      setStatus('sending');
      const isGoogleFormEndpoint = endpoint.includes('docs.google.com/forms/');
      if (isGoogleFormEndpoint) {
        const body = new URLSearchParams();
        body.append(ENTRY_NAME, formData.name);
        body.append(ENTRY_EMAIL, formData.email);
        body.append(ENTRY_MESSAGE, formData.message);

        await fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: body.toString(),
        });

        setFormData({ name: '', email: '', message: '' });
        setTemporaryStatus('unconfirmed');
        return;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormData({ name: '', email: '', message: '' });
      setTemporaryStatus('success');
    } catch {
      setTemporaryStatus('error');
    }
  };

  return (
    <main className="section page page--narrow">
      <h1 className="section-title animate-fade-in-up">
        {t('contact_title')}
      </h1>
      <p className="animate-fade-in-up animate-delay-1" style={{ color: '#666', marginBottom: '3rem', marginTop: '1rem' }}>
        {t('contact_desc')}
      </p>

      <form onSubmit={handleSubmit} className="glass-card animate-fade-in-up animate-delay-2" style={{ padding: '2.5rem' }}>
        <div className="visually-hidden" aria-hidden="true">
          <label htmlFor="company">{t('contact_company_label')}</label>
          <input
            id="company"
            name="company"
            type="text"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            {t('contact_label_name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            placeholder={t('contact_placeholder_name')}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            {t('contact_label_email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            {t('contact_label_message')}
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            placeholder={t('contact_placeholder_message')}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '1rem' }}
          disabled={status === 'sending'}
        >
          {status === 'sending'
            ? t('contact_sending')
            : t('contact_send')}
        </button>

        {status !== 'idle' && (
          <p
            className="form-status"
            data-status={status}
            role="status"
            aria-live="polite"
            style={{ marginTop: '1rem' }}
          >
            {status === 'success' && t('contact_status_success')}
            {status === 'error' && t('contact_status_error')}
            {status === 'config_error' && t('contact_status_config_error')}
            {status === 'unconfirmed' && t('contact_status_unconfirmed')}
            {status === 'sending' && t('contact_sending')}
          </p>
        )}
      </form>

      {/* Contact Info */}
      <div className="animate-fade-in-up animate-delay-3" style={{ marginTop: '3rem', textAlign: 'center' }}>
        <p style={{ color: '#666', fontSize: '0.95rem' }}>
          {t('contact_direct_email')}
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL ?? 'hello@example.com'}`}
          style={{
            color: '#004098',
            fontWeight: 600,
            fontSize: '1.1rem',
            display: 'inline-block',
            marginTop: '0.5rem'
          }}
        >
          {CONTACT_EMAIL ?? 'hello@example.com'}
        </a>
      </div>
    </main>
  );
}
