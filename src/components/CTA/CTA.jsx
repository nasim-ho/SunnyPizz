import Pizza from '../../assets/Images/cta-pizza.webp';

function CTA() {
  return (
    <section
      id="cta"
      className="mt-10 grid grid-cols-1 items-center gap-3 px-6 py-2 sm:px-10 md:grid-cols-2 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-2"
    >
      {/*-----------Pizza Image----------*/}
      <div className="flex items-center justify-center">
        <img
          src={Pizza}
          alt="A delicious slice of pizza with melted cheese"
          className="h-auto w-full sm:w-120 max-w-80 lg:max-w-130 object-contain"
        />
      </div>

      {/*---------Text Content------*/}
      <div className="flex flex-col items-start">

        <p className="font-signature text-3xl md:text-[30px] lg:text-[40px] leading-tight text-primary">
          Taste the Difference
        </p>

        <h2 className="font-heading text-[50px] sm:text-[55px] md:text-[65px] leading-tight text-heading">
          READY FOR
          <br />
          YOUR NEXT SLICE?
        </h2>

        <p className="mt-2 lg:mt-5 max-w-lg text-[14px] md:text-[16px] lg:text-[18px] leading-6 text-paragraph ">
          Every slice is baked with fresh ingredients, handmade dough, and
          plenty of melted cheese. Order now and enjoy pizza the way it
          should be.
        </p>

        {/*------------Buttons---------*/}
        <div className="mt-3 lg:mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#best-sellers"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5.5 py-3 text-[13px] lg:text-[17px] text-white transition-colors hover:bg-btnHover"
          >
            View Menu
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-black/25 px-5.5 py-3 text-[13px] lg:text-[17px] text-heading transition-colors hover:border-primary hover:text-primary"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}

export default CTA;