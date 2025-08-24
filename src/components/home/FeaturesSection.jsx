import React from "react";

// --- SVG Icons for Features Section ---
const FreeShippingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h7.5" />
  </svg>
);

const CashBackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h6m3-3.75l-3 3m0 0l-3-3m3 3V15m6-1.5V6a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6v12a2.25 2.25 0 002.25 2.25h10.5A2.25 2.25 0 0019.5 18v-2.25m-6-12v-1.5m0 15v-1.5"
    />
  </svg>
);

const SupportIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
    />
  </svg>
);

// --- Features Component ---
const FeaturesSection = () => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className=" rounded-lg p-8 text-center flex flex-col items-center justify-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_41_1628)">
              <path
                d="M30 14H38.646C39.464 14 40.2 14.498 40.502 15.258L43.714 23.286C43.902 23.758 44 24.262 44 24.77V36.666C44 37.1964 43.7893 37.7051 43.4142 38.0802C43.0391 38.4553 42.5304 38.666 42 38.666H38.338"
                stroke="#ADADAD"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M44 28H36V20H42.4"
                stroke="#ADADAD"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M32 38.8398H16.34"
                stroke="#ADADAD"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.112 10H28C28.5304 10 29.0391 10.2107 29.4142 10.5858C29.7893 10.9609 30 11.4696 30 12V30H4"
                stroke="#ADADAD"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 38.832H6C5.46957 38.832 4.96086 38.6213 4.58579 38.2462C4.21071 37.8711 4 37.3624 4 36.832V12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10H8.476"
                stroke="#ADADAD"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M37.408 36.5919C37.7021 36.8861 37.9355 37.2353 38.0947 37.6196C38.2539 38.004 38.3358 38.4159 38.3358 38.8319C38.3358 39.2479 38.2539 39.6598 38.0947 40.0442C37.9355 40.4285 37.7021 40.7777 37.408 41.0719C37.1138 41.3661 36.7646 41.5994 36.3802 41.7586C35.9959 41.9178 35.584 41.9997 35.168 41.9997C34.752 41.9997 34.34 41.9178 33.9557 41.7586C33.5713 41.5994 33.2221 41.3661 32.928 41.0719C32.6338 40.7777 32.4005 40.4285 32.2413 40.0442C32.0821 39.6598 32.0001 39.2479 32.0001 38.8319C32.0001 38.4159 32.0821 38.004 32.2413 37.6196C32.4005 37.2353 32.6338 36.8861 32.928 36.5919C33.2221 36.2977 33.5713 36.0644 33.9557 35.9052C34.34 35.746 34.752 35.6641 35.168 35.6641C35.584 35.6641 35.9959 35.746 36.3802 35.9052C36.7646 36.0644 37.1138 36.2977 37.408 36.5919"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.408 36.592C15.7021 36.8858 15.9355 37.2348 16.0948 37.6189C16.2541 38.003 16.3362 38.4147 16.3364 38.8305C16.3366 39.2464 16.2549 39.6581 16.0959 40.0424C15.9369 40.4266 15.7039 40.7758 15.41 41.07C15.1161 41.3641 14.7671 41.5975 14.383 41.7568C13.9989 41.9161 13.5872 41.9982 13.1714 41.9984C12.7556 41.9986 12.3438 41.9168 11.9595 41.7579C11.5753 41.5989 11.2261 41.3659 10.932 41.072C10.3379 40.4784 10.0039 39.6732 10.0035 38.8334C10.0032 37.9936 10.3364 37.188 10.93 36.594C11.5235 35.9999 12.3288 35.6659 13.1686 35.6655C14.0083 35.6652 14.8139 35.9984 15.408 36.592"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.794 18.636C14.5879 18.636 12.4722 17.7596 10.9122 16.1997C9.35231 14.6398 8.47595 12.5241 8.47595 10.318C8.47595 5.818 12.302 1.996 16.8 2C17.8923 2.0004 18.9738 2.21594 19.9829 2.63432C20.9919 3.0527 21.9087 3.66573 22.6808 4.43841C23.4529 5.21109 24.0653 6.12828 24.4829 7.13761C24.9006 8.14695 25.1153 9.22867 25.115 10.321C25.1146 11.4133 24.899 12.4949 24.4806 13.5039C24.0623 14.513 23.4492 15.4297 22.6765 16.2018C21.9039 16.974 20.9867 17.5863 19.9773 18.004C18.968 18.4216 17.8863 18.6364 16.794 18.636"
                stroke="black"
                stroke-width="1.5"
              />
              <path
                d="M20.4899 8.47021L15.8679 13.0922L13.0959 10.3182"
                stroke="#68D237"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_41_1628">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h3 className="text-lg font-bold mt-4">Free Shipping</h3>
          <p className="text-sm text-gray-500 mt-2">For invoices over $1,500</p>
        </div>
        <div className=" rounded-lg p-8 text-center flex flex-col items-center justify-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_41_1159)">
              <path
                d="M31.98 34L27.98 38L31.98 42"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.828 15.1722C27.2101 15.5412 27.5148 15.9825 27.7244 16.4705C27.9341 16.9586 28.0444 17.4834 28.049 18.0146C28.0537 18.5457 27.9525 19.0724 27.7513 19.564C27.5502 20.0556 27.2532 20.5022 26.8776 20.8777C26.5021 21.2533 26.0554 21.5503 25.5639 21.7515C25.0723 21.9526 24.5456 22.0538 24.0144 22.0492C23.4833 22.0445 22.9584 21.9342 22.4704 21.7246C21.9824 21.5149 21.541 21.2102 21.172 20.8282C20.4434 20.0738 20.0402 19.0633 20.0493 18.0146C20.0585 16.9658 20.4791 15.9625 21.2208 15.2209C21.9624 14.4793 22.9656 14.0586 24.0144 14.0495C25.0632 14.0404 26.0736 14.4435 26.828 15.1722"
                stroke="#68D237"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 15V21"
                stroke="#ADADAD"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M35 15V21"
                stroke="#ADADAD"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 30H10C8.93913 30 7.92172 29.5786 7.17157 28.8284C6.42143 28.0783 6 27.0609 6 26V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H38C39.0609 6 40.0783 6.42143 40.8284 7.17157C41.5786 7.92172 42 8.93913 42 10V22"
                stroke="#ADADAD"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M36 30H38C39.0609 30 40.0783 30.4214 40.8284 31.1716C41.5786 31.9217 42 32.9391 42 34C42 35.0609 41.5786 36.0783 40.8284 36.8284C40.0783 37.5786 39.0609 38 38 38H28"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_41_1159">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h3 className="text-lg font-bold mt-4">Cash Back</h3>
          <p className="text-sm text-gray-500 mt-2">
            When paying for products via Dasun Wallet
          </p>
        </div>
        <div className=" rounded-lg p-8 text-center flex flex-col items-center justify-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38 34H36C35.4696 34 34.9609 33.7893 34.5858 33.4142C34.2107 33.0391 34 32.5304 34 32V22C34 21.4696 34.2107 20.9609 34.5858 20.5858C34.9609 20.2107 35.4696 20 36 20H38C39.0609 20 40.0783 20.4214 40.8284 21.1716C41.5786 21.9217 42 22.9391 42 24V30C42 31.0609 41.5786 32.0783 40.8284 32.8284C40.0783 33.5786 39.0609 34 38 34Z"
              stroke="#ADADAD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 34H10C8.93913 34 7.92172 33.5786 7.17157 32.8284C6.42143 32.0783 6 31.0609 6 30V24C6 22.9391 6.42143 21.9217 7.17157 21.1716C7.92172 20.4214 8.93913 20 10 20H12C12.5304 20 13.0391 20.2107 13.4142 20.5858C13.7893 20.9609 14 21.4696 14 22V32C14 32.5304 13.7893 33.0391 13.4142 33.4142C13.0391 33.7893 12.5304 34 12 34Z"
              stroke="#ADADAD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M37 20V19C37 15.5522 35.6304 12.2456 33.1924 9.80761C30.7544 7.36964 27.4478 6 24 6C20.5522 6 17.2456 7.36964 14.8076 9.80761C12.3696 12.2456 11 15.5522 11 19V20"
              stroke="#ADADAD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.75 40H32C33.0609 40 34.0783 39.5786 34.8284 38.8284C35.5786 38.0783 36 37.0609 36 36V34"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.25 42.5H22.75C22.087 42.5 21.4511 42.2366 20.9822 41.7678C20.5134 41.2989 20.25 40.663 20.25 40C20.25 39.337 20.5134 38.7011 20.9822 38.2322C21.4511 37.7634 22.087 37.5 22.75 37.5H25.25C25.913 37.5 26.5489 37.7634 27.0178 38.2322C27.4866 38.7011 27.75 39.337 27.75 40C27.75 40.663 27.4866 41.2989 27.0178 41.7678C26.5489 42.2366 25.913 42.5 25.25 42.5V42.5Z"
              stroke="#68D237"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h3 className="text-lg font-bold mt-4">24/7 Support</h3>
          <p className="text-sm text-gray-500 mt-2">
            When something goes wrong
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
