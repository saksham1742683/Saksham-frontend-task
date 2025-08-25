import React from "react";
import { categories } from "../../data/mockData";
import { useCart } from "../../App";
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const SearchIconMobile = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const HeartIconMobile = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);
const CartIconMobile = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const MainHeader = () => {
      const { cartItems,  wishListItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        const Items = wishListItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="max-w-5xl mx-auto py-2 md:py-4 px-4">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center text-white">
        <button className="p-2">
          <MenuIcon />
        </button>
        <div className="flex items-center space-x-2">
          <a href="#" className="p-2">
            <SearchIconMobile />
          </a>
          <a href="#" className="p-2 relative">
            <HeartIconMobile />
              <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {Items}
            </span>
          </a>
          <a href="#" className="relative p-2">
            <CartIconMobile />
            <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          </a>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:grid grid-cols-8 gap-2">
        <div></div>
        <div></div>
        <div className="flex items-center col-span-4 bg-white rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full py-2 px-4 text-gray-700 focus:outline-none"
          />
          <select className="bg-gray-50 text-gray-500 py-2 px-4 border-l border-gray-200 focus:outline-none hover:bg-gray-100 cursor-pointer">
            {categories.map((cat) => (
              <option key={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <button className="bg-[#68D237] text-white py-2 px-6 rounded-lg flex justify-center items-center text-sm hover:bg-green-600">
          Search
        </button>

        <div className="flex items-center w-full justify-around">
          <a href="#" className="hover:text-gray-300 text-white relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_26_1438)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.304 4.75C5.65217 4.75 3.75 7.27613 3.75 9.755C3.75 12.3451 5.37381 14.7196 7.33666 16.4969C8.30654 17.3752 9.32777 18.0778 10.2037 18.557C10.6417 18.7967 11.0341 18.9754 11.3577 19.0924C11.6963 19.2147 11.9071 19.25 12 19.25C12.0929 19.25 12.3037 19.2147 12.6423 19.0924C12.9659 18.9754 13.3583 18.7967 13.7963 18.557C14.6722 18.0778 15.6935 17.3752 16.6633 16.4969C18.6262 14.7196 20.25 12.3451 20.25 9.755C20.25 7.27613 18.3478 4.75 15.696 4.75C14.1617 4.75 13.162 5.5059 12.5701 6.19834C12.4276 6.36502 12.2193 6.461 12 6.461C11.7807 6.461 11.5724 6.36502 11.4299 6.19834C10.838 5.5059 9.83832 4.75 8.304 4.75ZM2.25 9.755C2.25 6.68387 4.60583 3.25 8.304 3.25C9.96317 3.25 11.1765 3.91071 12 4.64228C12.8235 3.91071 14.0368 3.25 15.696 3.25C19.3942 3.25 21.75 6.68387 21.75 9.755C21.75 12.9659 19.7628 15.7139 17.6702 17.6088C16.6123 18.5667 15.4946 19.3377 14.5163 19.8729C14.0273 20.1405 13.5638 20.3543 13.1521 20.5031C12.7554 20.6464 12.3516 20.75 12 20.75C11.6484 20.75 11.2446 20.6464 10.8479 20.5031C10.4362 20.3543 9.97273 20.1405 9.48365 19.8729C8.50535 19.3377 7.38771 18.5667 6.32984 17.6088C4.23719 15.7139 2.25 12.9659 2.25 9.755Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_26_1438">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

               <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {Items}
            </span>
          </a>
          <a href="#" className="relative hover:text-gray-300 text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.29133 6.52781C5.43374 6.35208 5.64784 6.25 5.87403 6.25H18.5C19.6393 6.25 20.4739 7.31984 20.1976 8.4249L18.8496 13.8169C18.5679 14.9425 17.6109 15.7707 16.4557 15.8863C16.4557 15.8863 16.4557 15.8863 16.4557 15.8863L9.6397 16.5683C8.24376 16.707 6.9657 15.7742 6.67531 14.4014C6.67529 14.4013 6.67533 14.4015 6.67531 14.4014L5.14031 7.15543C5.09344 6.93416 5.14893 6.70354 5.29133 6.52781ZM6.79955 7.75L8.14275 14.0906C8.27445 14.7135 8.85459 15.1387 9.49036 15.0757L16.3064 14.3937C16.8311 14.3413 17.2661 13.9654 17.3944 13.4531C17.3944 13.4532 17.3944 13.453 17.3944 13.4531L18.7424 8.0611C18.7822 7.90216 18.6628 7.75 18.5 7.75H6.79955Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.75 4C2.75 3.58579 3.08579 3.25 3.5 3.25H5.224C5.57701 3.25 5.88224 3.49618 5.95699 3.84118L6.60699 6.84118C6.6947 7.24601 6.43764 7.64528 6.03282 7.73299C5.62799 7.8207 5.22872 7.56364 5.14101 7.15882L4.6191 4.75H3.5C3.08579 4.75 2.75 4.41421 2.75 4Z"
                fill="white"
              />
              <path
                d="M8.69727 18.517C9.31437 18.5171 9.81445 19.0171 9.81445 19.6342C9.81435 20.2502 9.31429 20.7503 8.69824 20.7504C8.0873 20.7504 7.58101 20.2554 7.58301 19.6332C7.58088 19.0132 8.08494 18.517 8.69727 18.517ZM17.1143 18.517C17.7314 18.5171 18.2314 19.017 18.2314 19.6342C18.2313 20.2503 17.7313 20.7503 17.1152 20.7504C16.5043 20.7504 15.998 20.2554 16 19.6332C15.9979 19.0132 16.5019 18.517 17.1143 18.517Z"
                fill="white"
              />
            </svg>

            <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;