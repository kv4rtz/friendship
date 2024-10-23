import { MainView } from "@/components"
import {
  AboutUsBlock,
  FriendShipBlock,
  MainCardBlock,
  ReviewsBlock,
  ShiftsBlock,
} from "@/components/blocks"
import { ContentBlock } from "@/components/blocks/ContentBlock"

const Home = () => {
  return (
    <>
      <MainView />
      <MainCardBlock />
      <AboutUsBlock />
      <ShiftsBlock />
      <ContentBlock />
      <FriendShipBlock />
      <ReviewsBlock />
    </>
  )
}

export default Home
