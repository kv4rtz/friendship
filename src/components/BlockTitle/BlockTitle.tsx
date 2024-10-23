import { PropsWithChildren } from "react"

export const BlockTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="font-headline text-[96px] mt-[210px] mb-[50px] text-primary text-center max-[768px]:text-[32px] max-[768px]:mt-[70px] max-[768px]:mb-[30px]">
      {children}
    </h2>
  )
}
