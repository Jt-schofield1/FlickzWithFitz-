import { FAQS } from '@/data/content';

/**
 * Native <details> — keyboard accessible and open-by-default for search engines
 * that ignore JS, with no state to manage.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function Faq() {
  return (
    <section className="mt-[36px] px-5 lg:mt-[120px] lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="eyebrow">FREQUENTLY ASKED</h2>

      <div className="mt-4 lg:mt-6" style={{ borderTop: '1px solid rgba(0,0,0,.14)' }}>
        {FAQS.map((faq) => (
          <details key={faq.q} className="faq group">
            <summary>
              <span className="display pr-6 text-[19px] leading-[1.3] lg:text-[25px]">
                {faq.q}
              </span>
              <span aria-hidden="true" className="faq-mark" />
            </summary>
            <p
              className="max-w-[720px] pb-[22px] text-[13px] leading-[1.7] lg:text-[14px]"
              style={{ color: 'rgba(0,0,0,.66)', textWrap: 'pretty' }}
            >
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
