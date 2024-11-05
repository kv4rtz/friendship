import Image from "next/image"
import Link from "next/link"
import { links } from "../Header"

export const Footer = () => {
  return (
    <footer id="contacts" className="py-[50px] bg-primary mt-[210px]">
      <div className="max-w-container mx-auto flex max-[1620px]:flex-col justify-between gap-[100px]">
        <div className="flex max-[900px]:flex-col justify-between flex-1 text-white font-manrope gap-[20px]">
          <Image src="/logo-white.svg" alt="logo" width="161" height="71" />
          <div className="max-w-[210px]">
            <h4 className="text-[24px] font-bold leading-[32.78px]">
              Навигация
            </h4>
            <ul className="mt-[20px] space-y-[10px] leading-[21.86px]">
              {links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-[210px]">
            <h4 className="text-[24px] font-bold leading-[32.78px]">
              Контакты
            </h4>
            <ul className="mt-[20px] space-y-[10px] leading-[21.86px]">
              <li>
                <Link href="tel:+79106544004">+7 (910) 654-40-04 нас</Link>
              </li>
              <li>
                <Link href="mailto:his.design@mail.ru">his.design@mail.ru</Link>
              </li>
            </ul>
            <ul className="mt-[20px] space-y-[10px] leading-[21.86px]">
              <li>
                <Link href="/">VK</Link>
              </li>
            </ul>
            <ul className="mt-[20px] space-y-[10px] leading-[21.86px]">
              <li>
                <Link href="/">Telegram</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-[210px]">
            <h4 className="text-[24px] font-bold leading-[32.78px]">
              Информация
            </h4>
            <ul className="mt-[20px] space-y-[10px] leading-[21.86px]">
              <li>
                <h5 className="font-bold text-[16px] leading-[21.86px]">
                  Офис
                </h5>
                <ul>
                  <li>г. Ижевск ул. 1 Подлесная дом 1, офис 8</li>
                  <li>Пн-Пт 10-19, Сб-Вс-по договоренности</li>
                </ul>
              </li>
              <li>
                <h5 className="font-bold text-[16px] leading-[21.86px]">
                  Лагерь
                </h5>
                <ul>
                  <li>Лагерь г. Ижевск, 14 км. Якшур - Бодьинского тракта</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[32px] w-full max-w-[670px] max-[1620px]:max-w-full max-[1620px]:min-h-[400px]">
          <a
            href="https://yandex.ru/maps/org/druzhba/155254192290/?utm_medium=mapframe&utm_source=maps"
            className="text-[#eee] text-[12px] absolute top-0"
          >
            Дружба
          </a>
          <a
            href="https://yandex.ru/maps/44/izhevsk/category/sales_office/146516537320/?utm_medium=mapframe&utm_source=maps"
            className="text-[#eee] text-[12px] absolute top-[14px]"
          >
            Офис продаж в Ижевске
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=53.190874%2C56.861746&mode=search&oid=155254192290&ol=biz&sctx=ZAAAAAgBEAAaKAoSCc8yi1BsqUpAEYeGxahra0xAEhIJfEYiNIKNvz8RR7Bx%2Fbs%2Boz8iBgABAgMEBSgKOABAkowGSAFqAnJ1nQHNzMw9oAEAqAEAvQFv6SsEwgELk%2By5ugai8fuuwgSCAgzQtNGA0YPQttCx0LCKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=53.190874%2C56.861746&sspn=0.011287%2C0.004696&text=%D0%B4%D1%80%D1%83%D0%B6%D0%B1%D0%B0&z=17"
            width="560"
            height="400"
            allowFullScreen
            className="relative w-full h-full max-[1620px]:min-h-[400px]"
          ></iframe>
        </div>
      </div>
    </footer>
  )
}
