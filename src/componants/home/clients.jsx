import React, { useEffect, useState } from "react";

const stats = [
  {
    value: 120,
    suffix: "+",
    label: "Projects delivered",
  },
  {
    value: 50,
    suffix: "+",
    label: "Global clients",
  },
  {
    value: 10,
    suffix: "+",
    label: "Countries reached",
  },
  {
    value: 95,
    suffix: "%",
    label: "Client satisfaction",
  },
];

// Duplicate slides for smooth continuous loop
const sliderStats = [...stats, ...stats];

function Clients() {
  const [active, setActive] = useState(0);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isTransitioning, setIsTransitioning] = useState(true);

  // =====================================================
  // NUMBER COUNTER
  // =====================================================
  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) =>
          Math.floor(stat.value * easeOut)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  // =====================================================
  // AUTO SLIDER
  // =====================================================
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // =====================================================
  // INFINITE LOOP RESET
  // =====================================================
  useEffect(() => {
    // When we reach duplicated slides
    if (active === stats.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActive(0);
      }, 700);

      return () => clearTimeout(timer);
    }

    // Turn transition back on after instant reset
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [active, isTransitioning]);

  // =====================================================
  // NEXT
  // =====================================================
  const nextSlide = () => {
    setIsTransitioning(true);
    setActive((prev) => prev + 1);
  };

  // =====================================================
  // PREVIOUS
  // =====================================================
  const prevSlide = () => {
    if (active === 0) {
      setIsTransitioning(false);
      setActive(stats.length);

      setTimeout(() => {
        setIsTransitioning(true);
        setActive(stats.length - 1);
      }, 50);
    } else {
      setIsTransitioning(true);
      setActive((prev) => prev - 1);
    }
  };

  // =====================================================
  // DOT CLICK
  // =====================================================
  const goToSlide = (index) => {
    setIsTransitioning(true);
    setActive(index);
  };

  return (
    <section
      id="clients"
      className="
        relative
        overflow-hidden
        bg-[#111111]
        px-5
        py-5
        sm:px-5
        sm:py-5
        lg:px-5
        lg:py-5
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================== */}
        <div className="mb-12 max-w-3xl sm:mb-16">

          <p
            className="
              mb-5
              flex
              items-center
              gap-3
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-green-500
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-green-500
              "
            />

            Our Impact
          </p>

          <h3
            className="
              text-4xl
              font-extrabold
              leading-[0.95]
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-5xl
            "
          >
            Built for momentum.
            <br />

            <em
              className="
                font-serif
                font-normal
                text-white/50
              "
            >
              Proven by results.
            </em>
          </h3>
        </div>

        {/* =================================================
            DESKTOP SLIDER
            4 CARDS VISIBLE
        ================================================== */}
        <div className="hidden lg:block">

          <div className="overflow-hidden rounded-3xl">

            <div
              className={`
                flex
                ${isTransitioning
                  ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : ""
                }
              `}
              style={{
                transform: `translateX(-${active * 25}%)`,
              }}
            >

              {sliderStats.map((stat, index) => {
                const realIndex = index % stats.length;

                return (
                  <div
                    key={`${stat.label}-${index}`}
                    className="
                      min-w-[25%]
                      w-[25%]
                      shrink-0
                      p-[1px]
                    "
                  >
                    <div
                      className="
                        group
                        relative
                        min-h-[180px]
                        overflow-hidden
                        border
                        border-white/10
                        bg-[#111111]
                        px-7
                        py-10
                        transition-all
                        duration-500
                        hover:bg-green-500
                      "
                    >

                      {/* Number */}
                      <div
                        className="
                          text-5xl
                          font-extrabold
                          tracking-[-0.05em]
                          text-white
                          transition-colors
                          duration-500
                          group-hover:text-black
                          xl:text-7xl
                        "
                      >
                        {counts[realIndex]}
                        {stat.suffix}
                      </div>

                      {/* Label */}
                      <p
                        className="
                          mt-4
                          text-sm
                          font-medium
                          text-white/50
                          transition-colors
                          duration-500
                          group-hover:text-black/70
                        "
                      >
                        {stat.label}
                      </p>

                      {/* Bottom Line */}
                      <div
                        className="
                          absolute
                          bottom-0
                          left-0
                          h-1
                          w-0
                          bg-black
                          transition-all
                          duration-500
                          group-hover:w-full
                        "
                      />

                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Desktop Controls */}
          <div
            className="
              mt-6
              flex
              items-center
              justify-between
            "
          >

            {/* Desktop Dots */}
            <div className="flex items-center gap-2">

              {stats.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      active % stats.length === index
                        ? "w-8 bg-green-500"
                        : "w-2 bg-white/30"
                    }
                  `}
                />
              ))}

            </div>

            {/* Arrows */}
            <div className="flex gap-3">

              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white
                  transition-all
                  duration-300
                  hover:border-green-500
                  hover:bg-green-500
                  hover:text-black
                "
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white
                  transition-all
                  duration-300
                  hover:border-green-500
                  hover:bg-green-500
                  hover:text-black
                "
              >
                →
              </button>

            </div>

          </div>
        </div>

        {/* =================================================
            MOBILE + TABLET SLIDER
            1 CARD VISIBLE
        ================================================== */}
        <div className="lg:hidden">

          <div className="overflow-hidden rounded-3xl">

            <div
              className={`
                flex
                ${isTransitioning
                  ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : ""
                }
              `}
              style={{
                transform: `translateX(-${active * 100}%)`,
              }}
            >

              {sliderStats.map((stat, index) => {
                const realIndex = index % stats.length;

                return (
                  <div
                    key={`${stat.label}-${index}`}
                    className="
                      min-w-full
                      shrink-0
                    "
                  >

                    <div
                      className="
                        relative
                        min-h-[200px]
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-7
                        py-10
                        sm:px-10
                        sm:py-12
                      "
                    >

                      {/* Number */}
                      <div
                        className="
                          text-6xl
                          font-extrabold
                          tracking-[-0.05em]
                          text-white
                          sm:text-7xl
                        "
                      >
                        {counts[realIndex]}
                        {stat.suffix}
                      </div>

                      {/* Label */}
                      <p
                        className="
                          mt-4
                          text-base
                          font-medium
                          text-white/50
                        "
                      >
                        {stat.label}
                      </p>

                      {/* Green Line */}
                      <div
                        className="
                          mt-8
                          h-1
                          w-16
                          rounded-full
                          bg-green-500
                        "
                      />

                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Mobile Controls */}
          <div
            className="
              mt-6
              flex
              items-center
              justify-between
            "
          >

            {/* Previous */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-white
                transition-all
                duration-300
                hover:border-green-500
                hover:bg-green-500
                hover:text-black
              "
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">

              {stats.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      active % stats.length === index
                        ? "w-8 bg-green-500"
                        : "w-2 bg-white/30"
                    }
                  `}
                />
              ))}

            </div>

            {/* Next */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-white
                transition-all
                duration-300
                hover:border-green-500
                hover:bg-green-500
                hover:text-black
              "
            >
              →
            </button>

          </div>
        </div>

     
      </div>
    </section>
  );
}

export default Clients;