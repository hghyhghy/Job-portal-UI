import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                alt="FlowBite Logo"
                width={32}
                height={32}
                className="h-8 me-3"
              />
              <span className=" text-black self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                Workindia 
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    workindia
                  </Link>
                </li>
                <li>
                  <Link href="https://tailwindcss.com/" className="hover:underline">
                    Tailwind CSS
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="https://github.com/hghyhghy" className="hover:underline">
                    Github
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link href="https://flowbite.com/" className="hover:underline">
              Workindia
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {[
              { href: "#", icon: "facebook" },
              { href: "#", icon: "discord" },
              { href: "#", icon: "twitter" },
              { href: "#", icon: "github" },
              { href: "#", icon: "dribbble" },
            ].map((social, index) => (
              <Link key={index} href={social.href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <span className="sr-only">{social.icon} page</span>
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  {/* Add respective SVG paths for each icon */}
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
