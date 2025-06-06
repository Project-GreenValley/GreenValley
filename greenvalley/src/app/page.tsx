// import Image from "next/image";
import Navbar from "./components/Navbar";
import Animated from "./components/Animated";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center">

        <Navbar />
        
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}

        <Animated>
          <h1 className="text-4xl md:text-6xl font-bold text-center my-16">
            Welcome to GreenValley
          </h1>
        </Animated>

        <div className="my-64">Featured Campaign</div>

        <Animated>
          <p className="text-lg md:text-2xl font-bold text-center max-w-2xl w-full mx-auto">
            Your platform for trustworthy fundraising
          </p>
        </Animated>

        <div className="my-64">Tutorial/guide</div>

        <Animated>
          <p className="text-lg md:text-2xl font-bold text-center max-w-3xl w-full mx-auto">
            Support projects that matter to you and see the change in action
          </p>
        </Animated>

        <div className="my-64">Categories/recommendations</div>

        <Animated>
          <p className="text-lg md:text-2xl font-bold text-center max-w-2xl w-full mx-auto">
            Crowdfunding with transparency and impact
          </p>
        </Animated>

        <div className="my-64">Tips/topics/articles/etc.</div>

      </main>

      <Footer />
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-4 bg-gray-800 text-white">
        Copyright © 2025 GreenValley
      </footer> */}
    </div>
  );
}
