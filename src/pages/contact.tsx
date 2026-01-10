import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated submit
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="section" style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem 1.5rem 6rem' }}>
      <h1 className="section-title animate-fade-in-up">
        {t('contact_title')}
      </h1>
      <p className="animate-fade-in-up animate-delay-1" style={{ color: '#666', marginBottom: '3rem', marginTop: '1rem' }}>
        {t('contact_desc')}
      </p>

      <form onSubmit={handleSubmit} className="glass-card animate-fade-in-up animate-delay-2" style={{ padding: '2.5rem' }}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            {language === 'ja' ? 'お名前' : 'Name'}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            placeholder={language === 'ja' ? '山田 太郎' : 'John Doe'}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            {language === 'ja' ? 'メールアドレス' : 'Email'}
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
            {language === 'ja' ? 'メッセージ' : 'Message'}
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            placeholder={language === 'ja' ? 'お問い合わせ内容をご記入ください...' : 'Write your message here...'}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '1rem' }}
          disabled={submitted}
        >
          {submitted
            ? (language === 'ja' ? '送信しました！' : 'Sent!')
            : (language === 'ja' ? '送信する' : 'Send Message')}
        </button>
      </form>

      {/* Contact Info */}
      <div className="animate-fade-in-up animate-delay-3" style={{ marginTop: '3rem', textAlign: 'center' }}>
        <p style={{ color: '#666', fontSize: '0.95rem' }}>
          {language === 'ja' ? 'または直接メールでも受け付けています：' : 'Or reach out directly via email:'}
        </p>
        <a
          href="mailto:hello@example.com"
          style={{
            color: '#004098',
            fontWeight: 600,
            fontSize: '1.1rem',
            display: 'inline-block',
            marginTop: '0.5rem'
          }}
        >
          hello@example.com
        </a>
      </div>
    </main>
  );
}
