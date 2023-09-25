import "%/globals.css";
import type { Metadata } from "next";
import { Raleway as Font } from "next/font/google";
import AuthProvider from "../utils/Auth/AuthProvider";
import { Provider } from "$/TRPC/Provider";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "C4SUCCESS",
  description: "Crafted by Kr Arun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='screen flex select-none text-white  [&>*]:max-w-[900px] [&>*]:mx-auto [&>*]:w-full bg-gradient-to-tr from-red-500 to-yellow-500 bg-fixed flex-col ' style={font.style}>
        <Provider>
          <AuthProvider>{children}</AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
