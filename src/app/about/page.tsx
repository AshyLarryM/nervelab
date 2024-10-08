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
    title: 'About 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis suscipit purus. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis suscipit purus. Aliquam erat volutpat',
    image: 'https://picsum.photos/seed/picsum/200',
  },
  {
    title: 'About 2',
    description: 'Second description goes here. Vivamus lacinia odio vitae vestibulum vestibulum. Second description goes here. Vivamus lacinia odio vitae vestibulum vestibulum',
    image: 'https://picsum.photos/seed/picsum/201',
  },
  {
    title: 'About 3',
    description: 'Third description goes here. Cras vel erat nec massa ultricies feugiat. Second description goes here. Vivamus lacinia odio vitae vestibulum vestibulum Second description goes here. Vivamus lacinia odio vitae vestibulum vestibulum',
    image: 'https://picsum.photos/seed/picsum/202',
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
          <img src={image} alt="Descriptive Alt Text" className="w-96 h-96 object-cover rounded-lg hero-gradient" />
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
