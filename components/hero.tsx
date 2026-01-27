// components/hero.tsx
"use client";

import { Typewriter } from "nextjs-simple-typewriter";

export default function Hero() {
  return (
    <section className="flex flex-col gap-5 relative">


      <h1 className="text-3xl font-semibold text-neutral-100">
        <div className="text-xl">Hello World,</div>
        I'm Abdullahi Mohamed
      </h1>

	  <div className="flex flex-col gap-0 text-neutral-50">
	    <div>
	      I'm{" "}
	      <span className="text-primary font-medium">
		<Typewriter
		  words={[
		    "a yasuo one-trick",
		    "a dev",
		    "a 🏀 enjoyer",
		    "a pineapple on pizza hater 🤮",
		  ]}
		  loop={0}
		  cursor
		  cursorStyle="|"
		  typeSpeed={100}
		  deleteSpeed={50}
		  delaySpeed={3000}
		/>
	      </span>{" "}
	      with a major in Mathematics at the University of Waterloo.
	    </div>

	    <p className="max-w-[500px]">
	      I like making games sometimes.
	    </p>
	  </div>


    </section>
  );
}


