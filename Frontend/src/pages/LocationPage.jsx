import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaPhone } from "react-icons/fa6";
import { IoHome, IoAlarmSharp } from "react-icons/io5";

const LocationPage = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center px-4 md:px-8 my-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Location</h2>
          <p className="text-gray-600 mt-2">
            Crave-worthy meals, chosen based on what food lovers enjoy the most.
          </p>
        </div>

        {/* Map + Details Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 w-full max-w-7xl">
          {/* Google Map */}

          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[650px]">
            <iframe
              title="Vijayawada Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122410.1045963028!2d80.56248227973448!3d16.510148654964077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1749188539287!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-md"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/2 text-gray-800 space-y-5">
            <p className="text-gray-600 mt-2">
              Crave-worthy meals, chosen based on what food lovers enjoy.
            </p>
            {/* Contact Details */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-400 p-4 w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-2xl">
                  <FaPhone />
                </div>
                <h3 className="text-xl font-semibold">Contact</h3>
              </div>
              <p className="text-sm sm:text-base mb-1">
                Phone: <span className="font-medium">(123) 456-7890</span>
              </p>
              <p className="text-sm sm:text-base mb-1">
                Email: <span className="font-medium">info@quickbite.com</span>
              </p>
              <p className="text-sm sm:text-base mb-1">
                Support:{" "}
                <span className="font-medium">support@quickbite.com</span>
              </p>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-400 p-4 w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-2xl">
                  <IoHome />
                </div>
                <h3 className="text-xl font-semibold">Our Address</h3>
              </div>
              <p className="text-sm sm:text-base">
                123 Lenin Nagar, Food Street, Vijayawada
              </p>
            </div>

            {/* Timings */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-400 p-4 w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-2xl">
                  <IoAlarmSharp />
                </div>
                <h3 className="text-xl font-semibold">Opening Timings</h3>
              </div>
              <table className="w-full border border-gray-300 text-sm sm:text-base text-left rounded overflow-hidden">
                <tbody>
                  {[
                    [
                      "Monday",
                      "11:00 AM - 10:00 PM",
                      "Tuesday",
                      "11:00 AM - 10:00 PM",
                    ],
                    [
                      "Wednesday",
                      "11:00 AM - 10:00 PM",
                      "Thursday",
                      "11:00 AM - 10:00 PM",
                    ],
                    [
                      "Friday",
                      "11:00 AM - 10:00 PM",
                      "Saturday",
                      "11:00 AM - 10:00 PM",
                    ],
                    ["Sunday", "11:00 AM - 6:00 PM"],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <td className="p-2 w-1/2">
                        <p className="font-medium">{row[0]}</p>
                        <p>{row[1]}</p>
                      </td>
                      <td className="p-2 w-1/2">
                        {row[2] && (
                          <>
                            <p className="font-medium">{row[2]}</p>
                            <p>{row[3]}</p>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LocationPage;
