import Image from "next/image"
import Link from "next/link"
import { Button } from "../../common"
import { links } from "../header.links"

export const HeaderDesktop = () => {
  return (
    <header className="max-[1140px]:hidden max-[1540px]:w-[97%] fixed w-[83%] z-50 top-[44px] left-1/2 -translate-x-1/2 rounded-full bg-white/80 backdrop-blur-md py-[10px] justify-between flex items-center font-manrope pl-[60px] pr-[8px]">
      <nav>
        <ul className="flex gap-[50px]">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute left-1/2 -translate-x-1/2">
        <Image src="/logo-stroke.svg" alt="logo" width={162} height={73} />
      </div>
      <div className="space-x-[10px]">
        <Button design="rounded">+7 (910) 654-40-04</Button>
        <Button design="rounded">Оформить путевку</Button>
      </div>
    </header>
  )
}
