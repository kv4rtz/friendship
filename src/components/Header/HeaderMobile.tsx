"use client"

import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"
import { Button } from "../common"

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={clsx(
        "absolute w-[calc(100%_-_20px)] left-[10px] top-[34px] max-[1140px]:block hidden bg-primary rounded-[25px] py-[9px] pr-[14px] pl-[24px] transition-all",
        isOpen ? "h-[400px]" : "h-[56px]"
      )}
    >
      <div className="flex justify-between">
        <Image src="/logo-white.svg" alt="logo" width={76} height={33} />
        <div className="space-x-[6px]">
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            design="rounded"
            severity="white"
          >
            Меню
          </Button>
          <Button design="rounded" severity="yellow">
            Оформить путевку
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-[30px]">
          <div className="grid grid-cols-2 gap-y-[10px] gap-x-[6px]">
            <Button severity="white" size="small">
              О нас
            </Button>
            <Button severity="white" size="small">
              Смены
            </Button>
            <Button className="col-span-2" severity="white" size="small">
              Родителям
            </Button>
            <Button className="col-span-2" severity="white" size="small">
              Контакты
            </Button>
            <Button className="col-span-2" severity="white" size="small">
              Полтика конфеденциальности
            </Button>
          </div>
          <footer>
            <div>© 2024 MVEK</div>
            <div>Все права защищены</div>
          </footer>
        </div>
      )}
    </header>
  )
}
