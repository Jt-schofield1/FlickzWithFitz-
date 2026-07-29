'use client';

import { useId, useState } from 'react';
import { BUDGETS, EVENT_TYPES, SITE } from '@/data/content';

const ENDPOINT = 'https://formspree.io/f/mblkgqkz';

type Errors = Partial<Record<'name' | 'email' | 'eventDate', string>>;

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export default function ContactForm() {
  const id = useId();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState(EVENT_TYPES[0]);
  const [budget, setBudget] = useState(BUDGETS[2]);
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = 'Please add your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = 'Please add a valid email.';
    if (!eventDate) next.eventDate = 'Please pick a date.';
    else if (eventDate < today()) next.eventDate = 'Please pick a date in the future.';
    return next;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, eventDate, eventType, budget, message }),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setStatus('sent');
      setName('');
      setEmail('');
      setEventDate('');
      setEventType(EVENT_TYPES[0]);
      setBudget(BUDGETS[2]);
      setMessage('');
    } catch {
      setStatus('error');
    }
  }

  const errorStyle = {
    marginTop: 8,
    font: '400 9.5px/1.6 var(--font-mono)',
    letterSpacing: '.12em',
    color: '#000',
  } as const;

  return (
    <form className="mt-5 max-w-[640px] lg:mt-[52px]" onSubmit={onSubmit} noValidate>
      <div
        className="grid gap-x-[30px]"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))' }}
      >
        <label className="field" htmlFor={`${id}-name`}>
          <span className="field-label">YOUR NAME</span>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="First and last"
            className="field-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
          />
          {errors.name && (
            <span id={`${id}-name-error`} style={errorStyle} role="alert">
              {errors.name.toUpperCase()}
            </span>
          )}
        </label>

        <label className="field" htmlFor={`${id}-email`}>
          <span className="field-label">EMAIL</span>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            className="field-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${id}-email-error` : undefined}
          />
          {errors.email && (
            <span id={`${id}-email-error`} style={errorStyle} role="alert">
              {errors.email.toUpperCase()}
            </span>
          )}
        </label>
      </div>

      <label className="field" htmlFor={`${id}-date`}>
        <span className="field-label">DATE OF THE EVENT</span>
        <input
          id={`${id}-date`}
          name="eventDate"
          type="date"
          min={today()}
          className="field-input min-h-[28px]"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          aria-invalid={Boolean(errors.eventDate)}
          aria-describedby={errors.eventDate ? `${id}-date-error` : undefined}
        />
        {errors.eventDate && (
          <span id={`${id}-date-error`} style={errorStyle} role="alert">
            {errors.eventDate.toUpperCase()}
          </span>
        )}
      </label>

      <ChipGroup
        legend="EVENT TYPE"
        options={EVENT_TYPES}
        value={eventType}
        onChange={setEventType}
      />
      <ChipGroup legend="BUDGET" options={BUDGETS} value={budget} onChange={setBudget} />

      <label className="field" htmlFor={`${id}-message`}>
        <span className="field-label">ANYTHING ELSE</span>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={3}
          placeholder="Venue, rough timings, what matters most to you…"
          className="field-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-solid mt-[26px] min-h-[48px] w-full justify-center lg:mt-[34px] lg:w-auto lg:justify-start lg:px-[34px] lg:py-[18px]"
      >
        {status === 'sending' ? 'SENDING…' : 'SEND INQUIRY →'}
      </button>

      <p role="status" aria-live="polite" className="sr-only">
        {status === 'sent' ? 'Inquiry sent.' : status === 'error' ? 'Sending failed.' : ''}
      </p>

      {status === 'sent' && (
        <p
          className="mt-4 font-mono text-[10px] leading-[1.8]"
          style={{ letterSpacing: '.12em' }}
        >
          THANK YOU — I&rsquo;LL COME BACK WITHIN TWO DAYS.
        </p>
      )}
      {status === 'error' && (
        <p
          className="mt-4 font-mono text-[10px] leading-[1.8]"
          style={{ letterSpacing: '.12em' }}
        >
          SOMETHING WENT WRONG — PLEASE EMAIL{' '}
          <a href={`mailto:${SITE.email}`} style={{ borderBottom: '1px solid rgba(0,0,0,.3)' }}>
            {SITE.email.toUpperCase()}
          </a>
        </p>
      )}

      <p
        className="mt-[18px] font-mono text-[9px] leading-[1.9] lg:mt-[22px] lg:text-[10px]"
        style={{ letterSpacing: '.12em', color: 'rgba(0,0,0,.42)' }}
      >
        OR EMAIL DIRECTLY —{' '}
        <a href={`mailto:${SITE.email}`} style={{ borderBottom: '1px solid rgba(0,0,0,.3)' }}>
          {SITE.email.toUpperCase()}
        </a>
      </p>
    </form>
  );
}

function ChipGroup({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  // A <legend> is laid out in the fieldset's border box, above its padding,
  // which collapses the gap to the field above. A labelled group keeps the
  // spacing the design asks for.
  const labelId = `${useId()}-legend`;

  return (
    <div
      role="group"
      aria-labelledby={labelId}
      className="pb-[14px] pt-[18px] lg:pb-4 lg:pt-5"
      style={{ borderBottom: '1px solid rgba(0,0,0,.2)' }}
    >
      <span id={labelId} className="field-label">
        {legend}
      </span>
      <div className="mt-3 flex flex-wrap gap-2 lg:mt-[13px] lg:gap-[9px]">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={value === option}
            className="chip flex min-h-[44px] items-center lg:min-h-0"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
