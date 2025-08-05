import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-md font-bold">NextStep Careers</h2>
            <p className="text-sm">
              &copy; 2024 Your Company. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.276 0H1.724C0.592 0 0 0.592 0 1.724v20.552C0 23.408 0.592 24 1.724 24h11.059v-9.294H9.691v-3.622h3.093V8.413c0-3.066 1.878-4.738 4.62-4.738 1.312 0 2.438 0.097 2.766 0.141v3.207l-1.898 0.001c-1.49 0-1.779 0.708-1.779 1.748v2.292h3.555l-0.463 3.622h-3.092V24h6.061C23.408 24 24 23.408 24 22.276V1.724C24 0.592 23.408 0 22.276 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-gray-400"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337 3.1a9.864 9.864 0 01-3.127 1.195A4.92 4.92 0 0016.616 3c-2.726 0-4.933 2.21-4.933 4.933 0 .39.043.765.127 1.124C7.728 8.841 4.1 6.884 1.671 3.905a4.93 4.93 0 00-.666 2.479c0 1.71.87 3.216 2.188 4.099a4.904 4.904 0 01-2.231-.616v.061c0 2.388 1.698 4.384 3.95 4.833a4.935 4.935 0 01-2.224.084 4.93 4.93 0 004.604 3.42A9.867 9.867 0 010 21.539 13.936 13.936 0 007.548 24c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.899 1.637-1.85 3.37-1.85 3.6 0 4.265 2.368 4.265 5.451v6.29zM5.337 7.433a2.062 2.062 0 01-2.062-2.063 2.062 2.062 0 114.124 0 2.062 2.062 0 01-2.062 2.063zM6.555 20.452H4.119V9h2.437v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
