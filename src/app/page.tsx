import Image from "next/image"

const Home = () => {
  return (
    <div>
      <div>test</div>
      <div className="font-headline">ДРУЖБА</div>
      <Image src="/logo.svg" alt="logotype" width={100} height={50} />
    </div>
  )
}

export default Home
