import React from "react";

export default function Service({ salon }) {
  console.log(salon.name, "card item 1");
  return (
    <div>
      {/* <!-- component -->
<!-- This is an example component --> */}
      <div className="container mx-auto my-24">
        <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
          <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
            {!salon.image ? (
              <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"></div>
            ) : (
              <img
                src={salon.image}
                className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
                alt="salonImage"
              />
            )}
            <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
              <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
                HOTEL AMANEE
              </h3>
              <h4 className="w-full text-xl text-gray-100 leading-tight">
                Bienvenido a
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
            <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
              <h4 className="hidden md:block text-xl text-gray-400">
                {salon.location}{" "}
              </h4>
              <h3 className="hidden md:block font-bold text-2xl text-gray-700">
                {salon.name}{" "}
              </h3>
              <p className="text-gray-600 text-justify">
                <ul class="list-disc">
                  {!salon.openTime ? "" : <li>Open Time : {salon.openTime}</li>}
                  {!salon.closeTime ? (
                    ""
                  ) : (
                    <li>Close Time : {salon.closeTime}</li>
                  )}
                  {!salon.contact ? (
                    ""
                  ) : (
                    <li>Contact Number: {salon.contact} </li>
                  )}
                </ul>
              </p>
              {/* <a
                className="flex items-baseline mt-3 text-sitetheme-blue hover-text-sitetheme-blue focus:text-blue-900"
                href=""
              >
                <span>View More</span>
                <span className="text-xs ml-1">&#x279c;</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
