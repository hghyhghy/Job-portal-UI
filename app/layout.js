import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Providers>
            <SignedOut>
              <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
                  <h1 className="text-2xl font-semibold mb-4 text-purple-800">Welcome</h1>
                  <p className="text-gray-600 mb-6">Sign in to access Workindia</p>
                  <SignInButton className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition" />
                </div>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="flex justify-end -mb-[30px] px-10 items-end top-5 relative">
                <UserButton />
              </div>
              {children}
              <Footer/>
            </SignedIn>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}