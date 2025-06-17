import heroImg from "../assets/Hero-img.png";

import heroImage from "../assets/Hero-image.png";

const NewsletterSignUp = () => {
  return (
    <section className="flex justify-center items-center   px-4 mb-12">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full rounded p-4">
        {/* Image Section */}
        <div className="flex justify-center md:w-1/2 ">
          <img
            src={heroImage}
            alt="Food Delivery Rider"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-sm text-orange-500 font-medium uppercase tracking-wide">
            Stay Updated
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            Never Miss a Tasty Deal!
          </h3>
          <p className="text-gray-600">
            Join our newsletter to get exclusive discounts, food offers, and the
            latest dishes right in your inbox.
          </p>
          <p className="text-gray-700">
            Be the first to know about limited-time deals from your favorite
            restaurants. Delivered weekly — no spam.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignUp;
