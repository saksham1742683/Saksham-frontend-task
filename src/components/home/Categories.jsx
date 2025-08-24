import React, { useState, useEffect } from "react";
const categories = [
  {
    id: 1,
    icon: () => (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_26_605)">
          <path
            d="M39.428 19.224V8C39.428 7.46957 39.2173 6.96086 38.8422 6.58579C38.4671 6.21071 37.9584 6 37.428 6H33.714C33.1836 6 32.6748 6.21071 32.2998 6.58579C31.9247 6.96086 31.714 7.46957 31.714 8V12.612"
            stroke="#ADADAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 21.428L21.396 8.232C22.1209 7.61068 23.0442 7.26917 23.999 7.26917C24.9538 7.26917 25.877 7.61068 26.602 8.232L42 21.428"
            stroke="#ADADAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.57202 19.224V38C8.57202 39.0609 8.99345 40.0783 9.7436 40.8284C10.4937 41.5786 11.5112 42 12.572 42H22"
            stroke="#ADADAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M41.9999 42L38.7219 38.722"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.448 26C34.4262 26 35.3949 26.1927 36.2986 26.567C37.2024 26.9414 38.0236 27.4901 38.7153 28.1818C39.407 28.8735 39.9557 29.6946 40.33 30.5984C40.7043 31.5021 40.897 32.4708 40.897 33.449C40.897 34.4272 40.7043 35.3959 40.33 36.2996C39.9557 37.2034 39.407 38.0245 38.7153 38.7162C38.0236 39.4079 37.2024 39.9566 36.2986 40.331C35.3949 40.7053 34.4262 40.898 33.448 40.898C31.4724 40.898 29.5777 40.1132 28.1808 38.7162C26.7838 37.3193 25.999 35.4246 25.999 33.449C25.999 31.4734 26.7838 29.5787 28.1808 28.1818C29.5777 26.7848 31.4724 26 33.448 26"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M36.3461 32L32.724 35.622L30.55 33.448"
            stroke="#68D237"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_26_605">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    label: "Real Estate",
  },
  {
    id: 2,
    icon: () => (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_41_645)">
          <path
            d="M28.57 15.428H19.428C17.2188 15.428 15.428 17.2188 15.428 19.428V28.57C15.428 30.7791 17.2188 32.57 19.428 32.57H28.57C30.7791 32.57 32.57 30.7791 32.57 28.57V19.428C32.57 17.2188 30.7791 15.428 28.57 15.428Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.572 20.572H27.43V27.43H20.572V20.572Z"
            stroke="#68D237"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32 6H16C10.4772 6 6 10.4772 6 16V32C6 37.5228 10.4772 42 16 42H32C37.5228 42 42 37.5228 42 32V16C42 10.4772 37.5228 6 32 6Z"
            stroke="#ADADAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M36 20H32.572"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M36 28H32.572"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.428 20H12"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.428 28H12"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 12V15.428"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28 12V15.428"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 32.572V36"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28 32.572V36"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_41_645">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    label: "Technology",
    active: true,
  },
  {
    id: 3,
    icon: () => (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_26_173)">
          <path
            d="M10 20.766V9.99997C10.0002 9.62865 10.1038 9.26471 10.2991 8.94892C10.4944 8.63313 10.7738 8.37795 11.106 8.21197L15.106 6.21197C15.4108 6.05964 15.7495 5.98773 16.09 6.00306C16.4304 6.0184 16.7613 6.12046 17.0512 6.29958C17.3411 6.4787 17.5805 6.72892 17.7465 7.02651C17.9126 7.3241 17.9998 7.65919 18 7.99997V20.764"
            stroke="#68D237"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 20.766H18C18.5304 20.766 19.0391 20.9767 19.4142 21.3518C19.7893 21.7268 20 22.2356 20 22.766V38C20 39.0609 19.5786 40.0783 18.8284 40.8284C18.0783 41.5786 17.0609 42 16 42H12C10.9391 42 9.92172 41.5786 9.17157 40.8284C8.42143 40.0783 8 39.0609 8 38V22.766C8 22.2356 8.21071 21.7268 8.58579 21.3518C8.96086 20.9767 9.46957 20.766 10 20.766Z"
            stroke="#ADADAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32 24H36C37.0609 24 38.0783 24.4214 38.8284 25.1716C39.5786 25.9217 40 26.9391 40 28V40C40 40.5304 39.7893 41.0391 39.4142 41.4142C39.0391 41.7893 38.5304 42 38 42H30C29.4696 42 28.9609 41.7893 28.5858 41.4142C28.2107 41.0391 28 40.5304 28 40V28C28 26.9391 28.4214 25.9217 29.1716 25.1716C29.9217 24.4214 30.9391 24 32 24V24Z"
            stroke="#ADADAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 30H8"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_26_173">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    label: "Watch",
  },
  {
    id: 4,
    icon: () => (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_26_660)">
          <path
            d="M16 10.804L14.208 10.206C13.6766 10.0288 13.114 9.96527 12.5565 10.0194C11.999 10.0735 11.4591 10.2441 10.9718 10.5201C10.4844 10.7961 10.0604 11.1714 9.72732 11.6217C9.3942 12.072 9.15936 12.5872 9.038 13.134L6.19 25.948C6.0638 26.5167 6.00009 27.0974 6 27.68V32C6 33.5913 6.63214 35.1174 7.75736 36.2426C8.88258 37.3678 10.4087 38 12 38H14.57C16.0577 37.9999 17.4924 37.4472 18.5956 36.449C19.6988 35.4508 20.3917 34.0783 20.54 32.598L21 28"
            stroke="#ADADAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32 10.804L33.792 10.206C34.3234 10.0288 34.886 9.96527 35.4435 10.0194C36.001 10.0735 36.5409 10.2441 37.0282 10.5201C37.5156 10.7961 37.9396 11.1714 38.2727 11.6217C38.6058 12.072 38.8406 12.5872 38.962 13.134L41.81 25.948C41.9363 26.5173 42.0001 27.0988 42 27.682V32C42 33.5913 41.3679 35.1174 40.2426 36.2426C39.1174 37.3678 37.5913 38 36 38H33.43C31.9423 37.9999 30.5076 37.4472 29.4044 36.442C28.3012 35.4508 27.6083 34.0783 27.46 32.598L27 28"
            stroke="#ADADAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M42 28C39.7177 26.6895 37.1318 25.9999 34.5 25.9999C31.8682 25.9999 29.2823 26.6895 27 28"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 28C18.7177 26.6895 16.1318 25.9999 13.5 25.9999C10.8682 25.9999 8.28233 26.6895 6 28"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 28C21.8655 27.3509 22.9181 27 24 27C25.0819 27 26.1345 27.3509 27 28"
            stroke="#68D237"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_26_660">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    label: "Glasses",
  },
  {
    id: 5,
    icon: () => (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_26_173)">
          <path
            d="M10 20.766V9.99997C10.0002 9.62865 10.1038 9.26471 10.2991 8.94892C10.4944 8.63313 10.7738 8.37795 11.106 8.21197L15.106 6.21197C15.4108 6.05964 15.7495 5.98773 16.09 6.00306C16.4304 6.0184 16.7613 6.12046 17.0512 6.29958C17.3411 6.4787 17.5805 6.72892 17.7465 7.02651C17.9126 7.3241 17.9998 7.65919 18 7.99997V20.764"
            stroke="#68D237"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 20.766H18C18.5304 20.766 19.0391 20.9767 19.4142 21.3518C19.7893 21.7268 20 22.2356 20 22.766V38C20 39.0609 19.5786 40.0783 18.8284 40.8284C18.0783 41.5786 17.0609 42 16 42H12C10.9391 42 9.92172 41.5786 9.17157 40.8284C8.42143 40.0783 8 39.0609 8 38V22.766C8 22.2356 8.21071 21.7268 8.58579 21.3518C8.96086 20.9767 9.46957 20.766 10 20.766Z"
            stroke="#ADADAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32 24H36C37.0609 24 38.0783 24.4214 38.8284 25.1716C39.5786 25.9217 40 26.9391 40 28V40C40 40.5304 39.7893 41.0391 39.4142 41.4142C39.0391 41.7893 38.5304 42 38 42H30C29.4696 42 28.9609 41.7893 28.5858 41.4142C28.2107 41.0391 28 40.5304 28 40V28C28 26.9391 28.4214 25.9217 29.1716 25.1716C29.9217 24.4214 30.9391 24 32 24V24Z"
            stroke="#ADADAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 30H8"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_26_173">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    label: "Cosmetic",
  },
  {
    id: 6,
    icon: () => (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_26_173)">
          <path
            d="M10 20.766V9.99997C10.0002 9.62865 10.1038 9.26471 10.2991 8.94892C10.4944 8.63313 10.7738 8.37795 11.106 8.21197L15.106 6.21197C15.4108 6.05964 15.7495 5.98773 16.09 6.00306C16.4304 6.0184 16.7613 6.12046 17.0512 6.29958C17.3411 6.4787 17.5805 6.72892 17.7465 7.02651C17.9126 7.3241 17.9998 7.65919 18 7.99997V20.764"
            stroke="#68D237"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 20.766H18C18.5304 20.766 19.0391 20.9767 19.4142 21.3518C19.7893 21.7268 20 22.2356 20 22.766V38C20 39.0609 19.5786 40.0783 18.8284 40.8284C18.0783 41.5786 17.0609 42 16 42H12C10.9391 42 9.92172 41.5786 9.17157 40.8284C8.42143 40.0783 8 39.0609 8 38V22.766C8 22.2356 8.21071 21.7268 8.58579 21.3518C8.96086 20.9767 9.46957 20.766 10 20.766Z"
            stroke="#ADADAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32 24H36C37.0609 24 38.0783 24.4214 38.8284 25.1716C39.5786 25.9217 40 26.9391 40 28V40C40 40.5304 39.7893 41.0391 39.4142 41.4142C39.0391 41.7893 38.5304 42 38 42H30C29.4696 42 28.9609 41.7893 28.5858 41.4142C28.2107 41.0391 28 40.5304 28 40V28C28 26.9391 28.4214 25.9217 29.1716 25.1716C29.9217 24.4214 30.9391 24 32 24V24Z"
            stroke="#ADADAD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 30H8"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_26_173">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    label: "Food High Grade",
  },
];

const IoChevronBack = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="48"
      d="M328 112L184 256l144 144"
    ></path>
  </svg>
);

const IoChevronForward = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="48"
      d="M184 112l144 144-144 144"
    ></path>
  </svg>
);

const allProducts = {
  "Real Estate": [
    {
      id: 101,
      badge: { text: "Hot", className: "bg-red-500 text-white" },
      brand: "Modern Downtown Loft",
      model: "2 Bed, 2 Bath",
      price: "$2,500/mo",
      author: "by Urban Dwellings",
      imageUrl:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=400&fit=crop",
      rating: 4.8,
    },
    {
      id: 102,
      brand: "Suburban Family Home",
      model: "4 Bed, 3 Bath, Large Yard",
      price: "$750,000",
      author: "by Homestead Realty",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=400&fit=crop",
      rating: 4.6,
    },
    {
      id: 103,
      badge: { text: "New Listing", className: "bg-green-500 text-white" },
      brand: "Luxury Beachfront Villa",
      model: "5 Bed, 6 Bath, Pool",
      price: "$3,200,000",
      author: "by Seaside Properties",
      imageUrl:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da02f3f?w=400&h=400&fit=crop",
      rating: 4.9,
    },
    {
      id: 104,
      brand: "City Penthouse",
      model: "3 Bed, 3 Bath, Terrace",
      price: "$4,200/mo",
      author: "by Elite Properties",
      imageUrl:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=400&fit=crop",
      rating: 4.7,
    },
    {
      id: 105,
      badge: { text: "Price Drop", className: "bg-orange-500 text-white" },
      brand: "Cozy Studio Apartment",
      model: "1 Bed, 1 Bath, Downtown",
      price: "$1,800/mo",
      oldPrice: "$2,100/mo",
      author: "by City Living",
      imageUrl:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=400&fit=crop",
      rating: 4.4,
    },
  ],
  Technology: [
    {
      id: 201,
      badge: { text: "New", className: "bg-green-500 text-white" },
      brand: "Apple MacBook Pro",
      model: "M3 Chip, 16GB RAM",
      price: "$2,013.54",
      author: "by Apple Official",
      imageUrl:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
      rating: 4.8,
    },
    {
      id: 202,
      badge: { text: "Favorite", className: "bg-yellow-500 text-white" },
      brand: "Apple Watch Series 9",
      model: "GPS + Cellular",
      price: "$517.79",
      author: "by 247 Store",
      imageUrl:
        "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop",
      rating: 4.7,
    },
    {
      id: 203,
      badge: { text: "-15%", className: "bg-red-500 text-white" },
      brand: "Dell XPS 15",
      model: "OLED, 32GB RAM",
      price: "$1,899",
      oldPrice: "$2,234.12",
      author: "by Dell Official",
      imageUrl:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      rating: 4.6,
    },
    {
      id: 204,
      brand: "Sony WH-1000XM5",
      model: "Noise Cancelling",
      price: "$399.99",
      author: "by Sony Official",
      imageUrl:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
      rating: 4.9,
    },
    {
      id: 205,
      badge: { text: "Gaming", className: "bg-purple-500 text-white" },
      brand: "NVIDIA RTX 4080",
      model: "Super Graphics Card",
      price: "$1,199.99",
      author: "by NVIDIA",
      imageUrl:
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop",
      rating: 4.8,
    },
  ],
  Watch: [
    {
      id: 301,
      badge: { text: "Sold Out", className: "bg-gray-400 text-white" },
      brand: "Rolex Submariner",
      model: "Stainless Steel",
      price: "$8,550.00",
      author: "by Rolex Official",
      imageUrl:
        "https://images.unsplash.com/photo-1523170335258-f5c6c6bd44bd?w=400&h=400&fit=crop",
      rating: 4.9,
    },
    {
      id: 302,
      brand: "Seiko Prospex",
      model: "Automatic Diver's Watch",
      price: "$450.00",
      author: "by Timepiece Emporium",
      imageUrl:
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&h=400&fit=crop",
      rating: 4.5,
    },
    {
      id: 303,
      badge: {
        text: "Limited",
        className: "bg-gold-500 text-white bg-yellow-600",
      },
      brand: "Omega Speedmaster",
      model: "Moonwatch Professional",
      price: "$6,350.00",
      author: "by Omega",
      imageUrl:
        "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=400&fit=crop",
      rating: 4.8,
    },
    {
      id: 304,
      brand: "Tag Heuer Formula 1",
      model: "Chronograph",
      price: "$1,200.00",
      author: "by Tag Heuer",
      imageUrl:
        "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=400&fit=crop",
      rating: 4.6,
    },
    {
      id: 305,
      badge: { text: "Vintage", className: "bg-amber-600 text-white" },
      brand: "Casio G-Shock",
      model: "Digital Sports Watch",
      price: "$89.99",
      author: "by Casio",
      imageUrl:
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
      rating: 4.4,
    },
  ],
  Glasses: [
    {
      id: 401,
      brand: "Ray-Ban Aviator",
      model: "Classic Gold Frame",
      price: "$154.00",
      author: "by Sunglass Hut",
      imageUrl:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
      rating: 4.7,
    },
    {
      id: 402,
      badge: { text: "Bestseller", className: "bg-blue-500 text-white" },
      brand: "Warby Parker",
      model: "Wilkie Eyeglasses",
      price: "$95.00",
      author: "by WP Official",
      imageUrl:
        "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop",
      rating: 4.6,
    },
    {
      id: 403,
      brand: "Oakley Holbrook",
      model: "Polarized Sunglasses",
      price: "$178.00",
      author: "by Oakley",
      imageUrl:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      rating: 4.5,
    },
    {
      id: 404,
      badge: { text: "Designer", className: "bg-purple-500 text-white" },
      brand: "Gucci Cat Eye",
      model: "Tortoiseshell Frame",
      price: "$320.00",
      author: "by Gucci",
      imageUrl:
        "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&h=400&fit=crop",
      rating: 4.8,
    },
    {
      id: 405,
      brand: "Tom Ford",
      model: "Square Frame Glasses",
      price: "$425.00",
      author: "by Tom Ford",
      imageUrl:
        "https://images.unsplash.com/photo-1506107884792-433ed6d7c3bb?w=400&h=400&fit=crop",
      rating: 4.7,
    },
  ],
  Cosmetic: [
    {
      id: 501,
      brand: "Fenty Beauty Foundation",
      model: "Pro Filt'r Soft Matte",
      price: "$39.00",
      author: "by Sephora",
      imageUrl:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
      rating: 4.6,
    },
    {
      id: 502,
      badge: { text: "New", className: "bg-pink-500 text-white" },
      brand: "Dior Lip Glow Oil",
      model: "Cherry Oil",
      price: "$40.00",
      author: "by Dior Cosmetics",
      imageUrl:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
      rating: 4.8,
    },
    {
      id: 503,
      badge: { text: "Bestseller", className: "bg-green-500 text-white" },
      brand: "The Ordinary Serum",
      model: "Niacinamide 10%",
      price: "$6.50",
      author: "by DECIEM",
      imageUrl:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
      rating: 4.5,
    },
    {
      id: 504,
      brand: "Charlotte Tilbury",
      model: "Magic Cream Moisturizer",
      price: "$100.00",
      author: "by CT Beauty",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      rating: 4.7,
    },
    {
      id: 505,
      badge: { text: "Vegan", className: "bg-green-600 text-white" },
      brand: "Rare Beauty Blush",
      model: "Soft Pinch Liquid Blush",
      price: "$23.00",
      author: "by Rare Beauty",
      imageUrl:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
      rating: 4.6,
    },
  ],
  "Food High Grade": [
    {
      id: 601,
      badge: {
        text: "Premium",
        className: "bg-gold-500 text-white bg-yellow-600",
      },
      brand: "A5 Wagyu Steak",
      model: "Japanese Ribeye",
      price: "$150.00/lb",
      author: "by Gourmet Meats",
      imageUrl:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop",
      rating: 4.9,
    },
    {
      id: 602,
      badge: { text: "Organic", className: "bg-green-600 text-white" },
      brand: "Truffle Oil",
      model: "Italian White Truffle",
      price: "$29.99",
      author: "by Fine Foods Co.",
      imageUrl:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
      rating: 4.7,
    },
    {
      id: 603,
      brand: "Beluga Caviar",
      model: "Imperial Grade",
      price: "$200.00/oz",
      author: "by Caviar House",
      imageUrl:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      rating: 4.8,
    },
    {
      id: 604,
      badge: { text: "Rare", className: "bg-purple-600 text-white" },
      brand: "Matsutake Mushrooms",
      model: "Fresh Japanese",
      price: "$80.00/lb",
      author: "by Forest Delicacies",
      imageUrl:
        "https://images.unsplash.com/photo-1470805799737-0b490b2df2b8?w=400&h=400&fit=crop",
      rating: 4.6,
    },
    {
      id: 605,
      brand: "Aged Balsamic Vinegar",
      model: "25 Year Modena DOP",
      price: "$125.00",
      author: "by Italian Imports",
      imageUrl:
        "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=400&h=400&fit=crop",
      rating: 4.8,
    },
  ],
};


const ShopCategories = () => {

  const [activeCategoryId, setActiveCategoryId] = useState(2);

  const [displayedProducts, setDisplayedProducts] = useState([]);


  useEffect(() => {

    const activeCategory = categories.find(
      (cat) => cat.id === activeCategoryId
    );
    if (activeCategory) {
 
      setDisplayedProducts(allProducts[activeCategory.label] || []);
    }
  }, [activeCategoryId]); 

  return (
    <div className="bg-white text-black p-4 sm:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-3xl font-bold mb-4 sm:mb-0">
            Shop By Categories
          </h2>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-green-500 font-semibold text-sm hover:underline"
            >
              See All
            </a>
            <IoChevronBack size={20} className="text-gray-400 cursor-pointer" />
            <IoChevronForward
              size={20}
              className="text-gray-800 cursor-pointer"
            />
          </div>
        </header>

        {/* Categories Grid - Now responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategoryId(category.id)} // Set active category on click
              className={`
                w-full aspect-[4/3] rounded-lg flex flex-col items-center justify-center p-2
                cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1
                ${
                  activeCategoryId === category.id // Dynamic class based on state
                    ? "bg-green-50 border-2 border-green-400 text-green-500 shadow-lg"
                    : "bg-white border border-gray-200 text-gray-500 hover:shadow-md hover:border-gray-300"
                }
              `}
            >
              <div className="text-4xl">{category.icon()}</div>
              <span className="mt-3 text-center font-bold text-sm leading-tight">
                {category.label}
              </span>
            </div>
          ))}
        </div>

        {/* Products Grid - Now responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mt-10">
          {displayedProducts.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="relative bg-gray-100 rounded-lg aspect-square group overflow-hidden">
                {product.badge && (
                  <div
                    className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-md z-10 ${product.badge.className}`}
                  >
                    {product.badge.text}
                  </div>
                )}
                {/* Replaced placeholder with an actual image */}
                <img
                  src={product.imageUrl}
                  alt={`${product.brand} ${product.model}`}
                  className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x400/e2e8f0/94a3b8?text=Image+Error";
                  }}
                />
              </div>
              <div className="mt-3 text-left flex-grow">
                <p className="text-sm text-gray-800 leading-tight font-semibold">
                  {product.brand}{" "}
                  {product.year && (
                    <span className="text-gray-400 font-normal">
                      {product.year}
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-500">{product.model}</p>
                <div className="mt-auto pt-2">
                  <p className="text-lg font-bold text-black">
                    {product.price}
                  </p>
                  {product.oldPrice && (
                    <p className="text-sm text-gray-400 line-through">
                      {product.oldPrice}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    <a href="#" className="text-blue-500 hover:underline">
                      {product.author}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;
