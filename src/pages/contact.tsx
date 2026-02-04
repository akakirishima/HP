import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL as string | undefined;

type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'config-error';

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    if (!CONTACT_ENDPOINT) {
      setStatus('config-error');
      window.setTimeout(() => setStatus('idle'), 5000);
      return;
    }
    if (honeypot) {
      return;
    }

    try {
      setStatus('sending');
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('message', formData.message);
      payload.append('language', language);

      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed');
      }

      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
      window.setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      window.setTimeout(() => setStatus('idle'), 5000);
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
            {status === 'config-error' && t('contact_status_config_error')}
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
