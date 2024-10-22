import { Card, MainView } from "@/components"
import { AboutUsBlock, MainCardBlock } from "@/components/blocks"

const Home = () => {
  return (
    <>
      <MainView />
      <MainCardBlock />
      <AboutUsBlock />
      <Card
        variant="content"
        data={{
          title: "Круглосуточная охрана территории и обеспечение безопасности",
          text: "Камеры на территории, профессиональные охранники и всё нужное для безопасности детей",
          color: "primary",
        }}
      />
    </>
  )
}

export default Home
