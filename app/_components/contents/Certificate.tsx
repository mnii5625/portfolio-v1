import ContentsHeader from '@/app/_components/ui/ContentsHeader';
import { certificates } from '@/app/portfolio.data';

export default function Certificate() {
  return (
    <section id="certificates">
      <ContentsHeader>Certificate</ContentsHeader>
      <div className="space-y-2 px-3">
        { certificates.map(certificate => (
          <article
            key={certificate.title}
            className={`
              group/certificate box-content rounded-sm border-2 border-transparent px-3 py-4
              transition-all duration-100
              hover:border-primary hover:bg-card
            `}
          >
            <p className="mb-2 text-xs text-muted-foreground">{ certificate.date }</p>
            <h3 className="mb-2 font-bold tracking-wide">
              { certificate.title }
            </h3>
            <p className="text-sm text-muted-foreground">{ certificate.issuer }</p>
          </article>
        )) }

      </div>
    </section>
  );
}
