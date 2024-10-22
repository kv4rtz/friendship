import Image from "next/image"

export const MainView = () => {
  return (
    <div>
      <h1 className="text-[6.66vw] font-bold text-center min-[730px]:leading-[52px]">
        Дружба
      </h1>
      <h2 className="mt-[4.3vw] text-[12.2vw] leading-[10.5vw] text-primary font-bold font-headline text-center">
        и&nbsp;больше ничего не нужно!
      </h2>
      <Image
        className="-translate-y-[8.8vw] z-1 w-[106vw] min-w-[862px] max-[862px]:absolute max-[862px]:left-1/2 max-[862px]:-translate-x-1/2 max-[517px]:-translate-y-[10vw]"
        src="/images/main.png"
        alt="render"
        width={2044}
        height={1150}
      />
    </div>
  )
}
