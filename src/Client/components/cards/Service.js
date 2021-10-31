import React, { useEffect, useState } from "react";
import { PORT } from "../../../actions/types";

export default function Service({ salon }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(`${PORT}/salon/image/${salon._id}`);
  }, []);

  console.log("salon image", image);
  return (
    <div>
      {/* <!-- component -->
<!-- This is an example component --> */}
      <div className="container mx-auto my-24">
        <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
          <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
            {!image ? (
              <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"></div>
            ) : (
              <img
                src={image}
                className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
                alt="salonImage"
              />
            )}
            <div className="md:hidden absolute inset-0 h-full w-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
              <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
                {salon.name}{" "}
              </h3>
              <h4 className="w-full text-xl text-gray-100 leading-tight">
                {salon.location}{" "}
              </h4>
            </div>
            <svg
              className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>

          <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
            <div className="w-full p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
              <h4 className="hidden md:block text-xl text-gray-400">
                {salon.location}{" "}
              </h4>
              <h3 className="hidden md:block font-bold text-2xl text-gray-700">
                {salon.name}{" "}
              </h3>
              <p className="text-gray-600 text-justify">
                <ul class="">
                  {!salon.openTime ? (
                    ""
                  ) : (
                    <li className="flex flex-row mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>{" "}
                      Open Time : {salon.openTime}
                    </li>
                  )}
                  {!salon.closeTime ? (
                    ""
                  ) : (
                    <li className="flex flex-row mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>{" "}
                      Close Time : {salon.closeTime}
                    </li>
                  )}
                  {!salon.contact ? (
                    ""
                  ) : (
                    <li className="flex flex-row mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Contact Number: {salon.contact}{" "}
                    </li>
                  )}
                </ul>
              </p>
              <div className="grid grid-cols-2 w-2/3 text-gray-600">
                <div className="flex flex-row">
                  Parking{" "}
                  <img
                    alt="iconimage"
                    className="w-6"
                    src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-check-multimedia-kiranshastry-solid-kiranshastry.png"
                  />
                </div>
                <div className="flex flex-row">
                  Wifi
                  <img
                    alt="iconimage1"
                    className="w-6"
                    src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-check-multimedia-kiranshastry-solid-kiranshastry.png"
                  />
                </div>
                <div className="flex flex-row">
                  Flexible Service
                  <img
                    alt="iconimage3"
                    className="w-6"
                    src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-check-multimedia-kiranshastry-solid-kiranshastry.png"
                  />
                </div>
                <div className="flex flex-row">
                  Washrooms{" "}
                  <img
                    alt="iconimage5"
                    className="w-6"
                    src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-check-multimedia-kiranshastry-solid-kiranshastry.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//rating
