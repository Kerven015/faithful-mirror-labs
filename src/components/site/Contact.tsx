import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "./i18n";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="px-5 lg:px-10 py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            {t.contact.title}
          </h2>
          <p className="mt-6 text-lg text-foreground/65 leading-relaxed">{t.contact.subtitle}</p>
          <div className="mt-10 space-y-5">
            <Item icon={<MapPin className="h-5 w-5" />} title={t.contact.addressLabel} value={t.contact.address} />
            <Item icon={<Phone className="h-5 w-5" />} title={t.contact.phoneLabel} value={t.contact.phone} />
            <Item icon={<Mail className="h-5 w-5" />} title={t.contact.emailLabel} value={t.contact.email} />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl bg-card border border-border p-7 lg:p-10 shadow-sm"
        >
          {sent ? (
            <div className="py-16 text-center">
              <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-brand-soft text-brand text-3xl">
                ✓
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{t.contact.sentTitle}</h3>
              <p className="mt-3 text-foreground/60">{t.contact.sentSub}</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label={t.contact.name} name="name" required />
                <Field label={t.contact.surname} name="surname" required />
                <Field label={t.contact.emailLabel} name="email" type="email" required />
                <Field label={t.contact.phoneLabel} name="phone" type="tel" required />
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium text-foreground/80">{t.contact.message}</label>
                <textarea
                  rows={5}
                  required
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground hover:opacity-90 transition-opacity"
              >
                {t.contact.send}
              </button>
              <p className="mt-4 text-xs text-foreground/50 text-center">
                {t.contact.privacy1}
                <a className="underline hover:text-brand" href="#">{t.contact.privacy2}</a>.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Item({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
        {icon}
      </div>
      <div>
        <p className="text-sm text-foreground/55">{title}</p>
        <p className="text-base font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors"
      />
    </div>
  );
}
