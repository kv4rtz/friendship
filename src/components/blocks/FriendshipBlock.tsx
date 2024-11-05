"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const MotionImage = motion.create(Image)

export const FriendShipBlock = () => {
  return (
    <section className="relative mt-[210px] max-[768px]:mt-[70px] pb-[448px] max-[768px]:pb-[142px]">
      <h2 className="max-w-[1285px] max-[620px]:text-[58px] max-[557px]:text-[48px] max-[465px]:text-[36px] max-[350px]:text-[32px] max-[620px]:leading-[100%] mx-auto text-[64px] font-bold leading-[52px] text-center">
        Здесь, роскошное лето наполнено смехом и увлекательными играми
      </h2>
      <MotionImage
        animate={{
          y: ["-65px", "-67px", "-65px"],
          x: ["-50%", "-51%", "-49%", "-50%"],
          rotate: ["0", "-2deg", "0"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute left-1/2 -translate-y-[65px] -translate-x-1/2 max-[768px]:max-w-[352px] max-[920px]:top-[180px] max-[835px]:top-[240px] max-[739px]:top-[300px] max-[621px]:top-[320px] max-[555px]:top-[280px] max-[467px]:top-[200px] max-[415px]:top-[220px]"
        src="/images/friendship-large.png"
        alt="friendship"
        width="1036"
        height="442"
      />
    </section>
  )
}
