import Hero from "./components/widgets/Hero";
import Programs from "./components/widgets/Programs";
import Images from "./components/widgets/Images";
import Partner from "./components/widgets/Partner";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero saction */}
        <Hero />
        {/* Programms */}
        <Programs />
        {/* Images */}
        <Images/>
        {/* Partner */}
        <Partner/>
      </main>
    </>
  );
}
