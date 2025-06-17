import serviceImg1 from "../assets/services/service-Img1.png";
import serviceImg2 from "../assets/services/service-Img2.png";
import serviceImg3 from "../assets/services/service-Img3.webp";

const Features = () => {
  return (
    <section className="my-8 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
      <p className="text-gray-600 mt-2 text-center">
        We Deliver More Than Just Food — We Deliver Satisfaction.
      </p>
      <div>
        <div className="grid md:grid-cols-3 mt-8 gap-4 text-center">
          <div>
            <img
              src={serviceImg1}
              alt="Feature-image"
              className="w-[100px] h-[100px] rounded-full object-cover m-auto border-8 border-[#f1f1f1]-600 p-1"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Super Fast Delivery
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Get your food delivered in under 30 minutes.
            </p>
          </div>
          <div className="">
            <img
              src={serviceImg3}
              alt="Feature-image"
              className="w-[100px] h-[100px] rounded-full object-cover m-auto border-8 border-[#f1f1f1]-600 p-1"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Quality Food
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              We offer a variety of high-quality meals to suit your taste buds.
            </p>
          </div>
          <div className="">
            <img
              src={serviceImg2}
              alt="Feature-image"
              className="w-[100px] h-[100px] rounded-full object-cover m-auto border-8 border-[#f1f1f1]-600 p-1"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              24/7 Support{" "}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              We're here for you, anytime you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
