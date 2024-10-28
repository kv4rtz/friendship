import Image from "next/image"

export const FriendShipBlock = () => {
  return (
    <section className="relative mt-[210px] max-[768px]:mt-[70px] pb-[448px] max-[768px]:pb-[142px]">
      <h2 className="max-w-[1285px] max-[620px]:text-[58px] max-[557px]:text-[48px] max-[465px]:text-[36px] max-[350px]:text-[32px] max-[620px]:leading-[100%] mx-auto text-[64px] font-bold leading-[52px] text-center">
        Здесь, роскошное лето наполнено смехом и увлекательными играми
      </h2>
      <Image
        className="absolute left-1/2 -translate-y-[65px] -translate-x-1/2 max-[768px]:max-w-[352px] max-[768px]:-translate-y-[35px]"
        src="/images/friendship-large.png"
        alt="friendship"
        width="1036"
        height="442"
      />
    </section>
  )
}
