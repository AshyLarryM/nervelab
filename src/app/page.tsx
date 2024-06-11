import { Hero } from "@/components/landing/Hero";
import ParticlesComponent from "@/components/particles/Particles";

export default function Home() {
  return (
    <>
      <ParticlesComponent />
      <div className="flex justify-center min-h-full text-white z-10">
        <Hero />
      </div>
    </>
  );
}
