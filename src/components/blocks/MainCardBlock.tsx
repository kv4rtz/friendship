import { Card } from "../Card"

export const MainCardBlock = () => {
  return (
    <section className="max-w-container mx-auto -mt-[13.4vw] max-[862px]:mt-[calc(516px_-_13.4vw)]">
      <Card
        data={{
          subtitle: "Незабываемое приключение",
          title: "В ЛАГЕРЕ ДРУЖБА",
          description: "Для детей и подростков от 6 до 17 лет",
          text: "Приглашаем в период каникул мальчишек и девчонок со всех уголков нашей Удмуртии увлекательно провести время!",
          image: "/images/large-card.png",
        }}
      />
    </section>
  )
}
