"use client"

import { AnimationProps, motion } from "framer-motion"
import Image from "next/image"

const MotionImage = motion.create(Image)

const animations: Record<string, AnimationProps["animate"]> = {
  blueStar: {
    y: ["0", "-20px", "0"],
    x: ["0", "-7px", "7px", "0"],
    rotate: ["0", "-5deg", "0"],
  },
  smile: {
    y: ["0", "10px", "0"],
    x: ["0", "5px", "-5px", "0"],
    rotate: ["0", "-2deg", "0"],
  },
  ball: {
    y: ["0", "-7px", "0"],
    x: ["0", "-5px", "5px", "0"],
    rotate: ["0", "-4deg", "0"],
  },
  chelovek: {
    y: ["0", "-2px", "0"],
    x: ["0", "5px", "3px", "0"],
    rotate: ["0", "3deg", "0"],
  },
  abv: {
    y: ["0", "2px", "0"],
    x: ["0", "3px", "-3px", "0"],
    rotate: ["0", "-2deg", "0"],
  },
  friendship: {
    y: ["0", "2px", "0"],
    x: ["0", "3px", "-3px", "0"],
    rotate: ["0", "-2deg", "0"],
  },
  purpleStar: {
    y: ["0", "-2px", "0"],
    x: ["0", "5px", "3px", "0"],
    rotate: ["0", "3deg", "0"],
  },
}

const transition: AnimationProps["transition"] = {
  duration: 7,
  repeat: Infinity,
  repeatType: "loop",
  ease: "easeInOut",
}

export const MainView = () => {
  return (
    <div>
      <h1 className="text-[6.66vw] font-bold text-center min-[730px]:leading-[52px]">
        Дружба
      </h1>
      <h2 className="mt-[4.3vw] text-[12.2vw] leading-[10.5vw] text-primary font-bold font-headline text-center">
        и&nbsp;больше ничего не нужно!
      </h2>
      <div className="relative -translate-y-[5vw] w-[106vw] min-w-[862px] max-[862px]:absolute max-[862px]:left-1/2 max-[862px]:-translate-x-1/2">
        <div className="relative">
          <MotionImage
            animate={animations.blueStar}
            transition={transition}
            className="absolute top-[4.2vw] z-10 left-[36.3vw] max-w-[32.9vw] w-[32.9vw] min-w-[268px] max-[768px]:top-[21px] max-[768px]:left-[290px]"
            src="/images/renders/blue-star.png"
            alt="blue-star"
            width="633"
            height="614"
          />
          <MotionImage
            animate={animations.smile}
            transition={transition}
            className="absolute top-[8.7vw] z-20 left-[63.69vw] max-w-[12.08vw] w-[12.08vw] min-w-[98px] max-[768px]:top-[69px] max-[768px]:left-[512px]"
            src="/images/renders/smile.png"
            alt="smile"
            width="232"
            height="200"
          />
          <MotionImage
            animate={animations.ball}
            transition={transition}
            className="absolute top-[12.24vw] z-20 left-[77.5vw] max-w-[15.89vw] w-[15.89vw] min-w-[133px] max-[768px]:hidden"
            src="/images/renders/ball.png"
            alt="ball"
            width="305"
            height="303"
          />
          <MotionImage
            animate={animations.chelovek}
            transition={transition}
            className="absolute top-[14.43vw] z-40 left-[23.39vw] max-w-[21.67vw] w-[21.67vw] min-w-[180px] max-[768px]:top-[112px] max-[768px]:left-[184px]"
            src="/images/renders/chelovek.png"
            alt="chelovek"
            width="416"
            height="440"
          />
          <MotionImage
            animate={animations.abv}
            transition={transition}
            className="absolute top-[19.11vw] left-[6.61vw] max-w-[41.72vw] w-[41.72vw] min-w-[329px] max-[768px]:top-[160px] max-[768px]:left-[56px]"
            src="/images/renders/abv.png"
            alt="abv"
            width="801"
            height="696"
          />
          <MotionImage
            animate={animations.friendship}
            transition={transition}
            className="absolute top-[22.6vw] z-10 left-[67.29vw] max-w-[28.49vw] w-[28.49vw] min-w-[227px] max-[768px]:top-[183px] max-[768px]:left-[551px]"
            src="/images/renders/friendship.png"
            alt="friendship"
            width="547"
            height="371"
          />
          <MotionImage
            animate={animations.purpleStar}
            transition={transition}
            className="absolute top-[27.71vw] left-[48.33vw] max-w-[32.19vw] w-[32.19vw] min-w-[258px] max-[768px]:top-[227px] max-[768px]:left-[395px]"
            src="/images/renders/purple-star.png"
            alt="purple-star"
            width="618"
            height="601"
          />
        </div>
        <div className="h-[59.89vw] min-h-[516px]" />
      </div>
    </div>
  )
}
