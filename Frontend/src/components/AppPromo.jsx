import promoImg from "../assets/promo-img.png";
import appStoreLogo1 from "../assets/app-store-logo-1.png";
import appStoreLogo2 from "../assets/app-store-logo-2.png";

const AppPromo = () => {
  return (
    <section className="bg-[#242424] text-white py-6 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row justify-around items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col leading-relaxed space-y-3 max-w-xl p-2">
          <h4 className="text-orange-600">Promo</h4>
          <h2 className="text-3xl font-semibold">Get the QuickBite App now!</h2>
          <p className="text-gray-300">
            For best offers and discounts curated specially for you.
          </p>
          <div className="flex gap-3 flex-wrap">
            <img
              src={appStoreLogo1}
              alt="App Store"
              className="h-[50px] w-[150px] object-cover rounded"
            />
            <img
              src={appStoreLogo2}
              alt="Play Store"
              className="h-[50px] w-[150px] object-cover"
            />
          </div>
        </div>

        {/* Right: Promo Image */}
        <div className="w-full max-w-xs sm:max-w-md">
          <img
            src="https://res.cloudinary.com/dasvdkncm/image/upload/v1749185349/original-9abf0b1d6872f25377a2942849bc0f37-removebg-preview_jt0ynr.png"
            alt="Food Delivery App"
            className="w-full h-[300px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
