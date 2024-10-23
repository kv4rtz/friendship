import { Card } from "../Card"

export const ShiftsBlock = () => {
  return (
    <section className="mx-auto max-w-container">
      <h2 className="font-headline text-[96px] mt-[210px] mb-[50px] text-primary text-center max-[1000px]:text-[32px] max-[1000px]:mt-[70px] max-[1000px]:mb-[30px]">
        Наши смены
      </h2>
      <Card
        variant="shift"
        data={{
          date: "10 июня - 24 июня",
          shift: "1 смена",
          title: "Конно-туристичская",
          description:
            "Конно — туристическая смена Создана для детей, которые любят лошадей и активный отдых, мечтают научиться ездить верхом или хотят совершенствовать уже имеющиеся навыки! Опыт верховой езды не обязателен",
          image: "/images/large-card.png",
          price: 41_290,
          priceWithDiscount: 34_990,
        }}
      />
    </section>
  )
}
