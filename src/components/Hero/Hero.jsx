import Pizza from '../../assets/Images/pizzaHERO.webp';
import Stars from '../../assets/Images/HeroStars.webp';
import Customer1 from '../../assets/Images/customer1-Hero.webp';
import Customer2 from '../../assets/Images/customer2-Hero.webp';
import Customer3 from '../../assets/Images/customer3-Hero.webp';

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 sm:px-10 lg:min-h-195 lg:px-12"
    >
      <div className='flex flex-row'>
        {/*-----------Hero Content---------*/}
        <div className="flex flex-col z-20 items-start mt-2 lg:mt-9 py-10 lg:min-h-140 lg:w-[55%] lg:justify-center lg:py-0">
          <p className="font-signature text-3xl sm:text-[40px] md:text-[45px] text-primary lg:text-[52px]">
            Hot and Fresh
          </p>

          <h1 className="mt-0 font-heading text-[50px] sm:text-[80px] md:text-[100px] leading-[0.95] text-heading sm:text-6xl lg:text-[140px]">
            SUNNY<span className="text-primary">PIZZ</span>
          </h1>

          <p className="mt-1 text-[14px] sm:text-[15px] md:text-[16px] lg:mt-6 w-50 sm:w-70 md:w-85 lg:w-md text-sm leading-6 text-paragraph sm:text-base lg:text-[18px]">
            Crafted with fresh ingredients and baked to perfection, every pizza
            is delivered hot, crispy, and full of flavor.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex w-fit flex-col items-start sm:flex-row sm:items-center gap-3">
            <a
              href="#best-sellers"
              className="inline-flex text-[13px] sm:text-[15px] md:text-[16px] lg:text-[20px] items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-white transition-colors hover:bg-btnHover"
            >
              Order Now <span aria-hidden="true">→</span>
            </a>

            <button
              type="button"
              className="inline-flex text-[13px] sm:text-[15px] md:text-[16px] lg:text-[20px] cursor-pointer items-center gap-2 rounded-full border border-black/25 px-4 md:px-5 py-3 text-sm text-heading transition-colors hover:border-primary hover:text-primary"
            >
              <span className="flex h-5 w-5 lg:h-7 lg:w-7 pl-0.5 items-center justify-center rounded-full border border-primary text-[10px] text-primary">
                ▶
              </span>
              Watch Our Story
            </button>
          </div>

          {/*-----------Reviews---------*/}
          <div className="mt-5 lg:mt-7 flex flex-col items-start gap-3">
            <p className="text-[14px] lg:text-[20px] text-heading">Reviews</p>

            <div className="flex items-center -space-x-2">
              <img
                src={Customer1}
                alt=""
                className="h-10 w-10 rounded-full border-2 border-background object-cover"
              />
              <img
                src={Customer2}
                alt=""
                className="h-10 w-10 rounded-full border-2 border-background object-cover"
              />
              <img
                src={Customer3}
                alt=""
                className="h-10 w-10 rounded-full border-2 border-background object-cover"
              />
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#777777] text-[11px] text-white">
                +87
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img src={Stars} alt="5 stars" className="h-6 w-auto object-contain" />
              <span className="text-sm text-heading">4.9</span>
            </div>

            <p className="text-xs lg:text-[18px] text-paragraph">
              Trusted by 12,000+ Pizza Lovers
            </p>
          </div>
        </div>

        {/*-------Hero Image---------*/}
        <div className="mt-8 flex min-h-70 items-center justify-center z-10 absolute -top-8 sm:-top-22 md:-top-25 lg:-top-30 xl:-top-58 -right-15 lg:-right-2.5 lg:mt-0 lg:min-h-0 lg:w-[55%] lg:justify-end">
          <img
            src={Pizza}
            className="w-75 sm:w-95 md:w-100 lg:w-120 object-contain xl:w-160 lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
