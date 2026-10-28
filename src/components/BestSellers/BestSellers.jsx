import Pizza1 from '../../assets/Images/pizza-1.webp';
import Pizza2 from '../../assets/Images/pizza-2.webp';
import Pizza3 from '../../assets/Images/pizza-3.webp';
import Pizza4 from '../../assets/Images/pizza-4.webp';
import CartIcon from '../../assets/icons/shopping.png';

const products = [
  {
    image: Pizza1,
    name: 'FRIED CHICKEN',
    description: 'Crispy fried chicken, mozzarella & secret sauce',
    price: 17,
  },
  {
    image: Pizza2,
    name: 'PEPPERONI',
    description: 'Classic pepperoni on melted mozzarella & herbs',
    price: 18,
  },
  {
    image: Pizza3,
    name: 'PREMIUM BEEF',
    description: 'Tender roast beef, mushrooms & rich cheese',
    price: 21,
  },
  {
    image: Pizza4,
    name: 'VEGGIE SUPREME',
    description: 'Fresh garden vegetables with mozzarella & herbs',
    price: 16,
  },
];

function BestSellers() {
  return (
    <section
      id="best-sellers"
      className="px-6 py-4 lg:py-0 sm:px-10 lg:px-12"
    >
      <div className="w-full">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <p className="font-signature text-3xl md:text-[30px] lg:text-[40px] leading-tight text-primary">
            Customer Favorites
          </p>

          <h2 className="font-heading text-[50px] sm:text-[55px] md:text-[65px] text-heading ">
            BEST SELLER
          </h2>

          <p className="mt-2 lg:mt-2 text-[14px] md:text-[16px] lg:text-[18px] text-paragraph">
            Handpicked favorites loved by thousands of pizza lovers
          </p>
        </div>

        {/*--------Product Cards-------*/}
        <div className="mt-22 lg:mt-32 grid grid-cols-2 gap-x-4 gap-y-25 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-0">
          {products.map((product) => (
            <article
              key={product.name}
              className="relative flex min-w-0 flex-col border border-[#E6E6E6] items-center rounded-t-[110px] rounded-b-[20px] bg-[#F5F5F5] cursor-pointer px-2 pb-5 pt-12 text-center shadow-[4px_4px_9px_-7px_rgba(0,0,0,0.95)]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="absolute left-1/2 top-0 h-30 w-30 lg:h-35 lg:w-35 xl:h-40 xl:w-40 -translate-x-1/2 -translate-y-1/2 object-contain"
              />

              <h3 className="text-[15px] font-semibold mt-7 lg:mt-12 text-primary sm:text-[19px]">
                {product.name}
              </h3>

              <p className="mt-2 w-38 md:w-70 lg:w-50 xl:w-70 text-[9px] sm:text-[11px] leading-[1.4] text-paragraph md:text-[12px]">
                {product.description}
              </p>

              <div className="mt-3 flex w-full items-center justify-center gap-2">
                <span className="text-[18px] font-bold text-primary">
                  ${product.price}
                </span>

                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-primary px-4 py-2 text-[9px] font-medium text-white transition-colors hover:bg-btnHover sm:text-[15px]"
                >
                  Add To Cart

                  <img
                    src={CartIcon}
                    alt=""
                    className="h-4.5 w-4.5 object-contain brightness-0 invert"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BestSellers;