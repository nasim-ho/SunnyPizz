import Customer1 from '../../assets/Images/customer1.webp';
import Customer2 from '../../assets/Images/customer2.webp';
import Customer3 from '../../assets/Images/customer3.webp';
import Customer4 from '../../assets/Images/customer4.webp';
import Customer5 from '../../assets/Images/customer5.webp';

const reviews = [
  {
    name: 'Sophia Bianchi',
    avatar: Customer1,
    text: 'I absolutely loved the handmade dough and premium cheese. Every bite was delicious from start to finish.',
  },
  {
    name: 'Matteo Ricci',
    avatar: Customer2,
    text: 'Fresh vegetables, rich tomato sauce, and perfectly melted cheese. Highly recommended for pizza lovers!',
  },
  {
    name: 'Alessia Anderson',
    avatar: Customer3,
    text: 'Great pizza! My only suggestion would be to offer a little more dipping sauce with the order. Overall, I was very satisfied.',
  },
  {
    name: 'Olivia Bennett',
    avatar: Customer4,
    text: "The crust was perfectly crispy, and the ingredients tasted incredibly fresh. Definitely one of the best pizzas I've had!",
  },
  {
    name: 'Michael Wilson',
    avatar: Customer5,
    text: 'Fast delivery, generous toppings, and amazing flavor. SunnyPizz has become my go-to place for pizza nights.',
  },
];

function Reviews() {
  return (
    <section
      id="reviews"
      className="mt-10 lg:mt-13 px-6 py-2 sm:px-10 lg:px-12 lg:py-2"
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-7 md:grid-cols-4">

        {/*-------------Section Heading-------------*/}
        <div className="flex flex-col items-start md:col-span-2">
          <p className="font-signature text-3xl md:text-[30px] lg:text-[40px] leading-tight text-primary">
            Make People Smile
          </p>

          <h2 className="font-heading text-[50px] sm:text-[50px] md:text-[60px] leading-tight text-heading">
            WHAT OUR
            <br />
            CUSTOMERS SAY
          </h2>

          <p className="mt-2 lg:mt-4 text-[14px] md:text-[16px] lg:text-[18px] w-full lg:w-120 leading-5 text-paragraph">
            Read some of their delicious experiences.
          </p>
        </div>

        {/*-------------Review Cards-------------*/}
        {reviews.map((review) => (
          <article
            key={review.name}
            className="flex min-w-0 md:self-end md:h-43.75 lg:self-end lg:h-43.75 border border-[#E6E6E6] flex-col rounded-3xl bg-[#F5F3EF] p-5 shadow-[4px_4px_9px_-7px_rgba(0,0,0,0.95)] md:col-span-2"
          >
            <div className="flex items-center gap-3">
              <img
                src={review.avatar}
                alt=""
                className="h-13 w-13 lg:h-15 lg:w-15 shrink-0 rounded-full object-cover"
              />

              <div className="min-w-0">
                <h3 className="text-[15px] lg:text-[18px] font-medium text-heading">
                  {review.name}
                </h3>

                <div
                  className="text-[15px] leading-5 tracking-wide text-[#FFB800]"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>
              </div>
            </div>

            <p className="mt-3 mb-3 text-[13px] lg:text-[15px] leading-[1.6] text-paragraph">
              {review.text}
            </p>
          </article>
        ))}

        {/*-------------View All Reviews-------------*/}
        <a
          href="#reviews"
          className="flex items-center justify-end gap-2 text-[15px] text-paragraph transition-colors hover:text-primary md:col-span-2 md:col-start-3 lg:col-start-3 lg:col-span-2"
        >
          View All Reviews
          <span aria-hidden="true">→</span>
        </a>

      </div>
    </section>
  );
}

export default Reviews;