import "%/globals.css";
import type { Metadata } from "next";
import { Raleway as Font } from "next/font/google";
import AuthProvider from "$/Auth/AuthProvider";
import { Provider } from "$/TRPC/Provider";
import Header from "#/header";

const font = Font({ subsets: ["latin"] , weight:'400' });

export const metadata: Metadata = {
  title: "C4SUCCESS",
  description: "Crafted by Kr Arun",
  applicationName:'C4SUCCESS',
  keywords:['c4,c,success,c4success,seefoursuccess,c4sucess'],
  creator:'ikrarun',
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
      <body className='screen flex select-none  h-full  bg-white bg-fixed text-black flex-col ' style={font.style}>
        <Provider>
          <AuthProvider>
            <Header/>
          <div className='max-w-[900px] flex flex-col grow h-full mx-auto w-full'>
            {children}
            </div>
            </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
