import { MainView } from "@/components"
import { AboutUsBlock, MainCardBlock } from "@/components/blocks"
import { ContentBlock } from "@/components/blocks/ContentBlock"

const Home = () => {
  return (
    <>
      <MainView />
      <MainCardBlock />
      <AboutUsBlock />
      <ContentBlock />
    </>
  )
}

export default Home
