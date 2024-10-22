"use client"

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "../../common"
import links from "../header.links"

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={clsx(
        "fixed z-50 w-[calc(100vw_-_20px)] left-[10px] top-[34px] max-[1140px]:block hidden bg-primary rounded-[25px] py-[9px] pr-[14px] pl-[24px] transition-all",
        isOpen ? "h-[400px]" : "h-[56px] overflow-hidden"
      )}
    >
      <div className="flex justify-between items-center">
        <Image src="/logo-white.svg" alt="logo" width={76} height={33} />
        <div className="space-x-[6px]">
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            design="rounded"
            severity="white"
            className="text-[12px]"
          >
            Меню
          </Button>
          <Button
            className="max-[385px]:hidden text-[12px]"
            design="rounded"
            severity="yellow"
          >
            Оформить путевку
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-between mt-[30px] h-[310px]">
        <div className="grid gap-y-[10px] gap-x-[6px] grid-cols-header">
          {links.map((link, idx) => (
            <Link
              className={clsx(idx > 1 && "col-span-2")}
              href={link.url}
              key={idx}
            >
              <Button severity="white" size="small">
                {link.text}
              </Button>
            </Link>
          ))}
          <Link className="col-span-2" href="/">
            <Button size="small" severity="cyan">
              Политика конфиденциаьнсти
            </Button>
          </Link>
        </div>
        <footer className="relative font-manrope text-[12px] text-white">
          <div>© 2024 MVEK</div>
          <div>Все права защищены</div>
          <Image
            className="absolute -right-6 -bottom-4 -rotate-3"
            src="/images/friendship.png"
            alt="friendship"
            width={197}
            height={84}
          />
        </footer>
      </div>
    </header>
  )
}
