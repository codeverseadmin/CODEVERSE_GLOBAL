export default function Philosophy() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="section-padding"
    >
      <div className="container-xl">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-8">
          <p className="text-label text-[var(--color-violet-light)]">Our Approach</p>

          <blockquote>
            <p
              id="philosophy-heading"
              className="text-display-lg text-[var(--color-text-primary)] leading-tight"
            >
              Technology is only valuable
              <br />
              when it solves something{' '}
              <em className="not-italic gradient-text-violet">meaningful.</em>
            </p>
          </blockquote>

          <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
            We bring design, engineering, and business thinking together to create digital
            experiences that are useful, thoughtful, and built with purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
