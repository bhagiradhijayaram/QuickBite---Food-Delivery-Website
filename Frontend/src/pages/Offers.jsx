import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [claimedOffers, setClaimedOffers] = useState({});
  const fetchOffersData = async () => {
    try {
      const response = await fetch("/data/offers.json");
      const offerData = await response.json();
      setOffers(offerData);
    } catch (error) {
      console.error("Failed to fetch offers:", error);
    }
  };

  useEffect(() => {
    fetchOffersData();
  }, []);

  useEffect(() => {
    console.log("Updated offers:", offers);
  }, [offers]);

  return (
    <>
      <Header />
      <section className="my-12">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Offers</h2>
          <p className="text-gray-600 mt-2">
            Crave-worthy meals, chosen based on what food lovers enjoy the most.
          </p>
        </div>
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {offers.length > 0 ? (
                offers.map((offer) => (
                  <div
                    key={offer.id}
                    className="bg-white rounded-md shadow p-5 flex flex-col gap-2 transition-transform hover:-translate-y-1 hover:shadow-md duration-300"
                  >
                    <img
                      src={offer.imageUrl}
                      alt={offer.title}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h3 className="text-xl font-semibold">{offer.title}</h3>
                    <p className="text-sm text-gray-700">{offer.description}</p>
                    <p className="text-sm font-medium text-red-500">
                      Code: {offer.code}
                    </p>
                    <ul className="list-disc list-inside text-xs text-gray-600">
                      {offer.conditions.map((condition, index) => (
                        <li key={index}>{condition}</li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <button
                        className={`text-sm text-white p-1 rounded transition ${
                          claimedOffers[offer.id]
                            ? "bg-green-600 cursor-not-allowed"
                            : "bg-orange-500 hover:bg-orange-600"
                        }`}
                        disabled={claimedOffers[offer.id]}
                        onClick={() =>
                          setClaimedOffers((prev) => ({
                            ...prev,
                            [offer.id]: true,
                          }))
                        }
                      >
                        {claimedOffers[offer.id] ? "Claimed" : "Claim Offer"}
                      </button>
                      <p className="text-sm text-gray-700">
                        Valid Till : {offer.validTill}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full">Loading offers...</p>
              )}
            </div>
          </div>
        </section>
        <section className="py-5 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              How to Make the Most of Our Offers
            </h2>
            <p className="text-gray-600 mb-10">
              Here’s how you can get maximum savings and never miss a deal!
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  1. Check Validity
                </h3>
                <p className="text-gray-600 text-sm">
                  Always look at the expiry date on each offer. Some are only
                  valid today!
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  2. Minimum Order
                </h3>
                <p className="text-gray-600 text-sm">
                  Many offers require a minimum cart value. Add more to your
                  cart to unlock them.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  3. Apply at Checkout
                </h3>
                <p className="text-gray-600 text-sm">
                  Don’t forget to apply the promo code manually or click “Claim
                  Offer” during checkout.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Offers;
