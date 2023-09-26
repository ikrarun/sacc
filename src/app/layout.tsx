import "%/globals.css";
import type { Metadata } from "next";
import { Raleway as Font } from "next/font/google";
import AuthProvider from "../utils/Auth/AuthProvider";
import { Provider } from "$/TRPC/Provider";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "C4SUCCESS",
  description: "Crafted by Kr Arun",
  applicationName:'C4SUCCESS',
  keywords:['c4,c,success,c4success,seefoursuccess,c4sucess'],
  creator:'ikrarun',
  robots:{
    index:true,
    follow:true,
    nocache:true,
    googleBot:{
      index:true,
      follow:true
    },
  },
  verification:{
    google:'2hauoLj85Zq6giRCnDeLG26KHGIZFQ0XDRMn8ClE83k'
  }

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
