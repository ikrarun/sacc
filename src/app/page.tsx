import Image from "next/image";
import hero from "%/hero.svg";
import LoginButton from "#/loginButton";
import Link from "next/link";
import googleMeet from "%/googleMeet.svg";
import { TbCoinRupee } from "react-icons/tb";
import { getServerAuthSession } from "$/Auth/auth";

export default async function Home() {
  const session = await getServerAuthSession();
  if (!session) {
    return (
      <main className="flex px-4 flex-col grow w-full h-full">
        <section className="grid grid-cols-1 h-full items-center justify-center grow sm:grid-cols-2">
          <div className="sm:w-full flex flex-col gap-4 font-semibold py-2">
            <h1 className="text-6xl sm:text-7xl">
              Elevate <br /> Your <br /> Learning
            </h1>
            <h1 className="text-gray-600 text-xl">
              Learning should be easy. It&apos;s time to say goodbye to boring
              classes.
            </h1>
          </div>
          <div className="sm:w-full flex items-start justify-center flex-col gap-4">
            <div className="flex h-36 pointer-events-none transform scale-x-[-1] sm:scale-x-100 w-fit aspect-square relative">
              <Image alt="" fill={true} src={hero} />
            </div>
            <LoginButton data={session} />
          </div>
        </section>
      </main>
    );
  } else if (session != null) {
    return (
      <main className="flex px-4 flex-col grow w-full h-full">
        <section className="grid grid-cols-1 h-full items-center justify-center grow sm:grid-cols-2">
          <div className="sm:w-full flex flex-col gap-4 font-semibold py-2">
            <h1 className="text-6xl sm:text-7xl">
              We love <br /> to talk <br /> with you.
            </h1>
            <h1 className="text-gray-600 text-xl">
              That's why we arrange sessions for you on every sunday.
            </h1>
          </div>
          <div className="sm:w-full flex items-start justify-center flex-col gap-4">
            <h1 className="text-xl">Join us on next live session.</h1>
            <h1 className="text-xl">Date: 01/10/2023</h1>
            <h1 className="text-xl gap-2 inline-flex items-center">
              Fees:Nil
              <TbCoinRupee />
            </h1>
            <div className="bg-white text-black border border-gray-400 px-2 w-fit text-2xl py-1 rounded-md">
              <Link
                href="https://meet.google.com/xjg-dtej-udv"
                className="flex flex-row gap-2"
              >
                <div className="relative h-8 w-8">
                  <Image alt="" fill={true} src={googleMeet} />
                </div>
                <h1>Meet</h1>
              </Link>
            </div>
            <LoginButton data={session} />
          </div>
        </section>
      </main>
    );
  }
}
