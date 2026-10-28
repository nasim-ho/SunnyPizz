import AboutPic from '../../assets/Images/About-pic.webp';

import icon1 from '../../assets/icons/1.png';
import icon2 from '../../assets/icons/2.png';
import icon3 from '../../assets/icons/3.png';

const features = [
  {
    icon: icon1,
    title: 'FRESH & LOCAL',
    description: 'Fresh ingredients, carefully selected daily',
  },
  {
    icon: icon2,
    title: 'PREMIUM CHEESE',
    description: 'Quality mozzarella for a creamy taste',
  },
  {
    icon: icon3,
    title: 'HANDMADE DOUGH',
    description: 'Freshly prepared every day',
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative mt-12 lg:mt-14 overflow-hidden px-6 py-2 sm:px-10 lg:px-12 lg:py-14"
    >
      {/*-----------Text Content--------*/}
      <div className="relative z-10 flex flex-col justify-center items-start lg:w-[52%]">

        <p className="font-signature text-3xl md:text-[30px] lg:text-[40px] leading-tight text-primary">
          Made with Love
        </p>

        <h2 className="font-heading text-[50px] sm:text-[55px] md:text-[65px] leading-tight text-heading">
          FRESH INGREDIENTS
        </h2>

        <p className="mt-2 lg:mt-4 text-[14px] md:text-[16px] lg:text-[18px] lg:w-120 xl:w-135 leading-6 text-paragraph">
          Every pizza begins with exceptional ingredients. Fresh vegetables,
          premium mozzarella, authentic tomato sauce, and handcrafted dough
          come together to create unforgettable flavor in every bite.
        </p>

        {/*-------------Features------------*/}
        <div className="mt-4 lg:mt-5 grid w-full grid-cols-3 gap-3 sm:max-w-md sm:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex w-full flex-col items-center text-center"
            >
              <img
                src={feature.icon}
                alt=""
                className="h-11 w-11 lg:h-15 lg:w-15 object-contain"
              />

              <h3 className="mt-3 text-[10px] font-semibold text-heading sm:text-[13px]">
                {feature.title}
              </h3>

              <p className="mt-1 text-[9px] leading-4 text-paragraph sm:text-[11px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/*------------Menu Button----------*/}
        <a
          href="#best-sellers"
          className="mt-8 lg:mt-9 text-[13px] lg:text-[17px] inline-flex items-center gap-2 rounded-full bg-primary px-5.5 py-3 text-xs text-white transition-colors hover:bg-btnHover"
        >
          View Menu
          <span aria-hidden="true">→</span>
        </a>
      </div>

      {/*---------------Image--------------*/}
      <div className="mt-6 -mr-6 flex items-start justify-end sm:-mr-10 lg:absolute lg:inset-y-0 lg:right-0 lg:mr-0 lg:mt-13 lg:w-[52%] lg:items-center lg:justify-end">
        <img
          src={AboutPic}
          alt="Fresh tomatoes, basil, mozzarella, olive oil and pizza dough"
          className="h-auto w-[90%] max-w-130 object-contain lg:w-130 xl:w-160 lg:max-w-none"
        />
      </div>
    </section>
  );
}

export default About;