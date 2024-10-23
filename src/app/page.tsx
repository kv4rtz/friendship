import { MainView } from "@/components"
import { AboutUsBlock, MainCardBlock, ShiftsBlock } from "@/components/blocks"
import { ContentBlock } from "@/components/blocks/ContentBlock"

const Home = () => {
  return (
    <>
      <MainView />
      <MainCardBlock />
      <AboutUsBlock />
      <ContentBlock />
      <ShiftsBlock />
    </>
  )
}

export default Home
