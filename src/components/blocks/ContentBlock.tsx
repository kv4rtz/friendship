import Image from "next/image"
import { BlockTitle } from "../BlockTitle"
import { Card } from "../Card"

export const ContentBlock = () => {
  return (
    <section id="parents" className="max-w-container mx-auto">
      <BlockTitle>Что входит в стоимость</BlockTitle>
      <div className="flex gap-[20px] flex-wrap items-stretch content-stretch">
        <Card
          variant="content"
          data={{
            className: "min-[900px]:min-w-[440px] min-w-[320px]",
            title:
              "Круглосуточная охрана территории и обеспечение безопасности",
            text: "Камеры на территории, профессиональные охранники и всё нужное для безопасности детей",
            color: "primary",
          }}
        />
        <Card
          variant="content"
          data={{
            className: "min-[900px]:min-w-[899px] min-w-[320px] min-h-[316px]",
            image: (
              <Image
                className="min-w-full min-h-full rounded-[32px] object-cover"
                src="/images/content-card-1.png"
                alt="content-card"
                width="899"
                height="316"
              />
            ),
          }}
        />
        <Card
          variant="content"
          data={{
            className: "min-[900px]:min-w-[440px] min-w-[320px]",
            title: "Круглосуточное медицинское обслуживание",
            text: "Квалифицированные медики всегда готовы оказать помощь и поддержать здоровье",
            color: "gray",
          }}
        />
        <Card
          variant="content"
          data={{
            className: "min-[900px]:min-w-[747px] min-w-[320px] min-h-[382px] ",
            image: (
              <Image
                className="min-w-full min-h-full rounded-[32px] object-cover"
                src="/images/content-card-2.png"
                alt="content-card"
                width="747"
                height="382"
              />
            ),
          }}
        />
        <Card
          variant="content"
          data={{
            className: "min-[900px]:min-w-[592px] min-w-[320px] min-h-[382px]",
            title: "Ежедневные оздоровительные процедуры",
            text: "Посещение 15-метрового бассейна, сауны и соляной пещеры для укрепления здоровья, повышение иммунитета и общего тонуса вашего ребёнка",
            color: "white",
          }}
        />
        <Card
          variant="content"
          data={{
            className: "min-[900px]:min-w-[440px] min-w-[320px] min-h-[382px]",
            title: "Забота о физическом и психологическом комфорте",
            text: "Только профессионалы и только хорошие люди, которые дарят свою любовь и заботу каждому",
            color: "cyan",
          }}
        />
        <Card
          variant="content"
          data={{
            className: "min-[900px]:min-w-[593px] min-w-[320px] min-h-[470px]",
            title: "Более 30 увлекательных мероприятий за смену",
            text: "Насыщенная программа с разнообразными спортивными соревнованиями, творческими мастер-классами и образовательными квестами",
            color: "white",
          }}
        />
        <Card
          variant="content"
          data={{
            className: "min-[900px]:min-w-[440px] min-w-[320px] min-h-[470px]",
            title: "Раскрепощение ребёнка",
            text: "Благодаря новому общению, совместным задачам на разные тематики, ребёнок становится более коммуникабельным, что в дальнейшем хорошо сложится на его будущее",
            color: "gray",
          }}
        />
        <Card
          variant="content"
          data={{
            className: "min-[900px]:min-w-[746px] min-w-[320px] min-h-[470px]",
            image: (
              <Image
                className="min-w-full min-h-full rounded-[32px] object-cover"
                src="/images/content-card-3.png"
                alt="content-card"
                width="747"
                height="470"
              />
            ),
          }}
        />
        <Card
          variant="content"
          data={{
            className: "min-[900px]:min-w-[593px] min-w-[320px] min-h-[322px]",
            title: "Воплощаем мечты в реальность",
            text: "Каждый ребёнок сможет почувствовать себе тем, кем давно мечтал стать. Для этого у нас есть тематические смены, костюмерная, возможность сыграть роль своего любимого героя",
            color: "primary",
          }}
        />
        <Card
          variant="content"
          data={{
            className: "min-[900px]:min-w-[592px] min-w-[320px] min-h-[322px]",
            image: (
              <Image
                className="min-w-full min-h-full rounded-[32px] object-cover"
                src="/images/content-card-4.png"
                alt="content-card"
                width="593"
                height="322"
              />
            ),
          }}
        />
        <Card
          variant="content"
          data={{
            className:
              "min-[900px]:min-w-[593px] min-w-[320px] min-w-[320px] min-h-[322px]",
            title: "Развлечение на свежем воздухe",
            text: "Это ли не счастье? Почти всё времяпрепровождение в лагере ребёнок будет занимать активностями именно на свежем воздухе. Вокруг красивейшие пейзажи и добрые люди",
            color: "yellow",
          }}
        />
      </div>
    </section>
  )
}
