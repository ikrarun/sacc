import Image from "next/image";
import hero from "%/hero.svg";
import LoginButton from "#/loginButton";
export default function Home() {
  return (
    <main className="flex p-4 flex-col h-full grow ">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center place-content-center justify-center grow h-full">
        {/* first section */}
        <h1 className="sm:w-full text-6xl sm:text-7xl font-semibold py-2">
          Elevate <br /> Your <br /> Learning
        </h1>
        {/* 2nd section */}
        <div className="flex gap-3 font-normal flex-col sm:w-full text-xl sm:text-2xl sm:p-3">
          <div className="flex h-36 pointer-events-none transform scale-x-[-1] sm:scale-x-100 w-fit aspect-square relative">
            <Image alt="" fill={true} src={hero} />
          </div>
          <h1>
            Learning should be easy. It&apos;s time to say goodbye to boring
            classes,
          </h1>
          {/* Button to Sign IN */}
          <LoginButton />
        </div>
      </div>
    </main>
  );
}
