"use client"

import clsx from "clsx"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export type TTabVariants = "summer" | "autumn" | "winter"

interface IShiftsTabsProps {
  onChange?: (value: TTabVariants) => void
}

export const ShiftsTabs = ({ onChange }: IShiftsTabsProps) => {
  const [tab, setTab] = useState<TTabVariants>("summer")
  const [tabs, setTabs] = useState<{ type: TTabVariants; text: string }[]>([
    {
      type: "winter",
      text: "Зимние смены",
    },
    {
      type: "summer",
      text: "Летние смены",
    },
    {
      type: "autumn",
      text: "Осенние смены",
    },
  ])

  useEffect(() => {
    if (onChange) onChange(tab)
  }, [onChange, tab])

  const handleTabClick = (type: TTabVariants) => {
    setTab(type)
    if (type === "summer") {
      setTabs([
        { type: "winter", text: "Зимние смены" },
        { type: "summer", text: "Летние смены" },
        { type: "autumn", text: "Осенние смены" },
      ])
    } else if (type === "autumn") {
      setTabs([
        { type: "winter", text: "Зимние смены" },
        { type: "autumn", text: "Осенние смены" },
        { type: "summer", text: "Летние смены" },
      ])
    } else if (type === "winter") {
      setTabs([
        { type: "summer", text: "Летние смены" },
        { type: "winter", text: "Зимние смены" },
        { type: "autumn", text: "Осенние смены" },
      ])
    }
  }

  return (
    <ul className="flex justify-center max-[385px]:flex-col max-[385px]:gap-0 max-[887px]:gap-[13px] max-[887px]:text-[16px] max-[768px]:text-[12px] gap-[50px] text-[24px] leading-[28.18px] font-bold text-textGray">
      {tabs.map((item) => (
        <motion.button
          key={item.type}
          className={clsx(
            tab === item.type
              ? "text-[48px] max-[768px]:text-[18px] max-[385px]:text-[24px] max-[887px]:text-[24px] leading-[56.35px] text-black"
              : "mt-[14px] max-[768px]:mt-[3px] max-[887px]:mt-[px]"
          )}
          layout
          transition={{ type: "spring", stiffness: 900, damping: 40 }}
        >
          <li onClick={() => handleTabClick(item.type)}>{item.text}</li>
        </motion.button>
      ))}
    </ul>
  )
}
