import React from "react";

// --- SVG Icons for Contact Section ---
// Reusable icon components for cleaner code
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400 flex-shrink-0" // Prevents icon from shrinking
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

// --- Footer Component ---
const Footer = () => {
  // Helper component for footer links for reusability
  const FooterLink = ({ href = "#", children, className = "text-gray-400" }) => (
    <a
      href={href}
      className={`${className} hover:text-green-500 transition-colors text-sm`}
    >
      {children}
    </a>
  );

  return (
    <footer className="bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Top section with links: Stacks on mobile, 2 cols on small screens, 4 on large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="text-sm text-gray-400">ftribe Co., Ltd</p>
            <div className="flex items-start gap-3">
              <LocationIcon />
              <p className="text-sm text-gray-400">
                1658 Rosewood Lane
                <br />
                New york city, NY
              </p>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon />
              <p className="text-sm text-green-500">212 929 9953</p>
            </div>
            <div className="flex items-center gap-3">
              <MailIcon />
              <p className="text-sm text-green-500">admin@ftribe.com</p>
            </div>
          </div>

          {/* Cooperation Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Cooperation - Association</h3>
            <div className="flex flex-col space-y-3">
              <FooterLink>Operation Regulation of EC-Exchange</FooterLink>
              <FooterLink>Return Policy</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Selling With ftribe</FooterLink>
            </div>
          </div>

          {/* Customer Support Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Customer Support</h3>
            <div className="flex flex-col space-y-3">
              <p className="text-sm text-gray-400">
                Hotline Customer Service{" "}
                <span className="text-green-500">212 929 9953</span>
              </p>
              <FooterLink>Frequently Asked Questions</FooterLink>
              <FooterLink>Submit Support Request</FooterLink>
              <FooterLink>Ordering Guide</FooterLink>
              <FooterLink>Shipping Methods</FooterLink>
            </div>
          </div>

          {/* Additional Customer Support Info */}
          <div className="space-y-4">
            {/* Invisible h3 preserves vertical alignment with other columns */}
            <h3 className="text-lg font-bold invisible">More Support</h3>
            <div className="flex flex-col space-y-3">
              <FooterLink>Installment Purchase Guide</FooterLink>
              <FooterLink>Import Policy</FooterLink>
              <p className="text-sm text-gray-400">
                Customer Support:{" "}
                <span className="text-green-500">customer@ftribe.com</span>
              </p>
              <p className="text-sm text-gray-400">
                Security Error Report:{" "}
                <span className="text-green-500">admin@ftribe.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with copyright */}
      <div className="border-t border-gray-800 bg-white">
        {/* Stacks vertically on mobile, horizontally from md screen size up */}
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-black text-center md:text-left order-2 md:order-1">
            Copyright 2020 @ ftribe
          </p>
          {/* Links wrap and center on mobile, stay in a row on larger screens */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 order-1 md:order-2">
            <FooterLink href="#" className="text-black">Introduce</FooterLink>
            <span className="text-gray-400 hidden sm:inline">.</span>
            <FooterLink href="#" className="text-black">Partner Incentives</FooterLink>
            <span className="text-gray-400 hidden sm:inline">.</span>
            <FooterLink href="#" className="text-black">Promotion</FooterLink>
            <span className="text-gray-400 hidden sm:inline">.</span>
            <FooterLink href="#" className="text-black">Contact</FooterLink>
            <span className="text-gray-400 hidden sm:inline">.</span>
            <FooterLink href="#" className="text-black">Frequently asked Questions</FooterLink>
          </div>
          <div className="flex items-center gap-2 order-3">
            {/* Placeholder for payment icons */}
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;