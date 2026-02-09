/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_ID?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_CONTACT_ENDPOINT?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_CONTACT_GOOGLE_ENTRY_NAME?: string;
  readonly VITE_CONTACT_GOOGLE_ENTRY_EMAIL?: string;
  readonly VITE_CONTACT_GOOGLE_ENTRY_MESSAGE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
