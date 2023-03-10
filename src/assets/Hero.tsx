export default function Hero(props: HeroProps) {
  return (
    <div>
      <div className="inset-y-0 right-0 absolute left-[43.91%] w-[705px]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 705 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask
            id="mask0_110_52"
            maskUnits="userSpaceOnUse"
            x="145"
            y="0"
            width="560"
            height="900"
          >
            <path
              d="M 145 40 C 145 17.909 162.909 0 185 0 H 705 V 900 H 185 C 162.909 900 145 882.091 145 860 V 40 Z"
              fill="#E3EBD6"
             />
          </mask>
          <g mask="url(#mask0_110_52)">
            <g filter="url(#filter0_f_110_52)">
              <rect
                x="319"
                y="351"
                width="213"
                height="369"
                rx="20"
                fill="#505646"
               />
            </g>
            <rect
              y="208"
              width="240"
              height="484"
              fill="url(#pattern-110:52-0)"
             />
            <rect
              x="610"
              y="208"
              width="240"
              height="484"
              fill="url(#pattern-110:52-1)"
             />
            <rect
              x="275"
              y="148"
              width="300"
              height="605"
              fill="url(#pattern-110:52-2)"
             />
            <circle cx="401" cy="787" r="4" fill="#FAF8F4" />
            <rect
              x="410"
              y="783"
              width="30"
              height="8"
              rx="4"
              fill="#FF6525"
             />
            <circle cx="449" cy="787" r="4" fill="#FAF8F4" />
          </g>
          <defs>
            <filter
              id="filter0_f_110_52"
              x="199"
              y="231"
              width="453"
              height="609"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
               />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
               />
              <feGaussianBlur
                stdDeviation="60"
                result="effect1_foregroundBlur_110_52"
               />
            </filter>
            <pattern
              id="pattern-110:52-0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_110_52"
                transform="scale(0.00111111 0.000550964)"
               />
            </pattern>
            <pattern
              id="pattern-110:52-1"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image1_110_52"
                transform="scale(0.00111111 0.000550964)"
               />
            </pattern>
            <pattern
              id="pattern-110:52-2"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image2_110_52"
                transform="scale(0.00111111 0.000550964)"
               />
            </pattern>
            <image
              id="image0_110_52"
              width="900"
              height="1815"
              xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/c98669b6-7401-41ad-a8e0-21f0690f1c19.webp"
             />
            <image
              id="image1_110_52"
              width="900"
              height="1815"
              xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/27c3e5ba-22a9-4ea4-b45e-09321aea5ed3.webp"
             />
            <image
              id="image2_110_52"
              width="900"
              height="1815"
              xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/fc2bb1df-365f-44ba-9ff3-aff51be30489.webp"
             />
          </defs>
        </svg>
      </div>
    </div>
  );
}

Hero.defaultProps = {};

interface HeroProps {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
