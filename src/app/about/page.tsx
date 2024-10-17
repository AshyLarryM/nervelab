import PageFrame from '@/components/layouts/PageFrame';
import ParticlesComponent from '@/components/particles/Particles';

interface AboutProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const aboutData: AboutProps[] = [
  {
    title: 'Embrace the Digital Frontier',
    description: "We're redefining the boundaries between reality and the digital realm. VectorBall isn't just a game—it's an odyssey through consciousness and code. Join Vector, our advanced AI, as you traverse worlds inspired by ancient civilizations, solve intricate puzzles, and explore the depths of collective human wisdom. Are you ready to step into the unknown and shape the future of interactive experiences?",
    image: '/assets/anubis.jpg',
  },
  {
    title: 'The Symphony of Innovation',
    description: "Innovation at NerveLabs resonates beyond visuals—it's an experience that engages all senses. Music is the heartbeat of VectorBall, crafted to immerse you fully in the adventure. Our synthesizer technology bridges the gap between player and sound, creating unique soundscapes. With over 200 unique songs, each note and harmony is intertwined with your journey, echoing the themes of exploration and transformation that define our creations.",
    image: '/assets/cs80.jpg',
  },
  {
    title: 'Unite, Compete, Unveil Truths',
    description: "At NerveLabs, we explore the depths of human connection and competition. VectorBall offers a unique experience where you and your friends can delve into expansive open worlds inspired by ancient civilizations. Collaborate to overcome intricate challenges, unlock hidden secrets, and influence a narrative that evolves with every choice you make. But alliances are not always steadfast. Engage in dynamic PVP battles that will test your skills and the bonds of friendship. The co-op campaign is designed to challenge not just your prowess but your honesty, occasionally pitting you against your companions in unexpected ways. As you journey with Vector, you'll discover that the true nature of humanity lies in the balance between cooperation and competition. Are you ready to face not only the game's mysteries but also the reflections of yourselves?",
    image: '/assets/fractal.jpg',
  }
];

function About({ title, description, image, reverse }: AboutProps) {
  return (
    <div className="flex items-center justify-center text-white mx-8 mb-16">
      <ParticlesComponent />
      <div className={`w-full flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} border border-green-500 nav-gradient-green`}>
        <div className="flex-1 flex items-center justify-center bg-transparent/40">
          <div className="p-8">
            <div className='border border-purple-500 hero-gradient p-4'>
              <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
              <p className='text-center font-light'>{description}</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center bg-transparent/40 p-8">
          <img src={image} alt="Descriptive Alt Text" className="w-auto h-auto object-cover rounded-lg hero-gradient" />
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageFrame showNavbar={true} showFooter={true} showParticles={true}>
      <div className='max-w-7xl mx-auto'>
        <div>
          <h1 className='flex justify-center lg:text-5xl text-4xl font-medium text-white  py-8'>About NerveLabs</h1>
        </div>
        {aboutData.map((data, index) => (
          <About key={index} title={data.title} description={data.description} image={data.image} reverse={index % 2 !== 0} />
        ))}
      </div>
    </PageFrame>
  );
}
