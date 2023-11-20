import { Profile } from "@/components/profile";
import data from "@/assets/data/constant.json";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="w-full md:min-w-[600px] md:w-1/3 absolute left-1/2 -translate-x-1/2 word-break">
      <Header />
      <Profile data={data} />
    </main>
  )
}
