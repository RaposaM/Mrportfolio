import { Link } from "react-router";
import svgPaths from "../../imports/DesignPortfolio/svg-6wxj9nyj9k";
import imgBug21 from "../../imports/DesignPortfolio/1ce87d4363ee6fa964cdda36a70f3703b22d025d.png";
import imgImage961 from "../../imports/DesignPortfolio/7960192135425a345ed312ea1bfc3f730720ace0.png";
import imgFrame114 from "../../imports/DesignPortfolio/d8e9f7adab9241d22039a8b975538326ba03e114.png";
import imgFrame115 from "../../imports/DesignPortfolio/034f2c554cfdfc09f65fa34703773fb8e6ef4ca1.png";
import imgFrame116 from "../../imports/DesignPortfolio/e8fe553e7c66351f159df5e163f2caf9bb7fe3ae.png";
import imgFrame117 from "../../imports/DesignPortfolio/c9a288d7c758e855381736f564ad037ca1df0b56.png";
import Hero from "../../imports/Hero-1-1/Hero-224-117";
import AboutSection from "../../imports/Frame1321321359/Frame1321321359";

function Links() {
  return (
    <div className="flex font-['Ancizar_Serif:Regular',sans-serif] font-normal gap-4 md:gap-8 items-center text-[20px] md:text-[32px]">
      <a className="block" href="https://github.com/RaposaM" target="_blank">
        <p className="cursor-pointer decoration-solid underline hover:text-gray-300">Github</p>
      </a>
      <a className="block" href="https://drive.google.com/file/d/1vJoL18C36K93fbqF7secC2yu3LIqfBgj/view?usp=sharing" target="_blank">
        <p className="cursor-pointer decoration-solid underline hover:text-gray-300">Resume</p>
      </a>
      <a className="block" href="https://www.linkedin.com/in/mitchell-raposa/" target="_blank">
        <p className="cursor-pointer decoration-solid underline hover:text-gray-300">Linkedin</p>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#4c4c4c] w-full py-6 px-8">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between text-white">
        <p className="font-['Ancizar_Serif:SemiBold',sans-serif] font-semibold text-[32px] md:text-[40px]">Contact Me!</p>
        <Links />
      </div>
    </div>
  );
}

function ExperienceCard({ icon, title, dates, bullets }: { icon: React.ReactNode; title: string; dates: string; bullets: string[] }) {
  return (
    <div className="bg-[#565656] rounded-[20px] p-4 md:p-6 transition-all duration-300 hover:bg-[#7B316E] hover:translate-y-[-4px] hover:shadow-lg cursor-pointer">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
        <div className="flex gap-4 md:gap-6 items-center w-full md:w-auto">
          {icon}
          <div className="h-[83.5px] w-0 border-l-2 border-black hidden md:block" />
        </div>
        <div className="flex-1 text-white w-full">
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center mb-3">
            <p className="font-['Archivo:Bold',sans-serif] font-bold text-[22px] md:text-[28px] flex-1" style={{ fontVariationSettings: "'wdth' 100" }}>
              {title}
            </p>
            <p className="font-['Archivo:Regular',sans-serif] font-normal text-[18px] md:text-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {dates}
            </p>
          </div>
          <ul className="font-['Archivo:ExtraLight',sans-serif] font-extralight text-[16px] md:text-[18px] list-disc ml-7" style={{ fontVariationSettings: "'wdth' 100" }}>
            {bullets.map((bullet, index) => (
              <li key={index} className="leading-normal mb-1">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[87.962px] w-[73.597px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.5972 87.9618">
        <g id="Group 14">
          <path d={svgPaths.p16af5f80} fill="var(--fill-0, black)" id="Union" />
          <ellipse cx="17.0123" cy="53.764" fill="var(--fill-0, #D9D9D9)" id="Ellipse 16" rx="6.98482" ry="12.7898" transform="rotate(7.45873 17.0123 53.764)" />
          <ellipse cx="31.8623" cy="57.8388" fill="var(--fill-0, #D9D9D9)" id="Ellipse 17" rx="4.72034" ry="8.69785" transform="rotate(-17.8099 31.8623 57.8388)" />
        </g>
      </svg>
    </div>
  );
}

function ExperienceCards() {
  return (
    <div className="max-w-7xl mx-auto px-8 space-y-9">
      <ExperienceCard
        icon={
          <div className="h-[71.61px] w-[77px] shrink-0">
            <img key={imgBug21} alt="DigitalNEST logo" className="h-full w-full object-contain" src={imgBug21} />
          </div>
        }
        title="Design Associate - DigitalNEST"
        dates="FEB 2025 - FEB 2026"
        bullets={[
          "Gained skills in a variety of disciplines, ranging from web design, to web development and marketing. Built out multiple projects for DigitalNEST and other non-profits. Got well versed in professional client work.",
          "Built up skills in Wordpress, Figma, Canva, Photoshop, and Illustrator."
        ]}
      />
      <ExperienceCard
        icon={
          <div className="h-[96px] w-[86px] shrink-0">
            <img key={imgImage961} alt="DigitalNEST icon" className="h-full w-full object-cover" src={imgImage961} />
          </div>
        }
        title="Web IT Pathway - DigitalNEST"
        dates="FEB 2024 - JAN 2024"
        bullets={[
          "Built the front-end for an internal Ticketing system using tailwindCSS and typescript, designed the pages in figma.",
          "Learned introductory level JavaScript, HTML, and CSS and how they interact with each other within websites, and made projects integrating these languages. Got hands on experience with Nextjs, TailwindCSS, typescript, and Wordpress."
        ]}
      />
      <ExperienceCard
        icon={<Group />}
        title="Freelance Graphic Designer"
        dates="FEB 2024 - PRESENT"
        bullets={[
          "Collaborated with local bands, event promoters, and music venues to make flyers, promotions, and logos",
          "designed eye-catching, impactful flyers to promote underground alternative music events.",
          "hands on experience with professional design and advertising promoting the local music scene."
        ]}
      />
    </div>
  );
}

function ProjectCard({ image, tags, title, description }: { image: string; tags: string[]; title: string; description: string }) {
  return (
    <Link to="/projects" className="block h-full">
      <div className="bg-[#565656] rounded-[8px] border border-[rgba(0,0,0,0.3)] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-[#7B316E] hover:translate-y-[-4px] hover:shadow-lg cursor-pointer overflow-hidden h-full flex flex-col">
        <div className="p-[10px] flex flex-col flex-1">
          <div className="h-[250px] md:h-[334px] rounded-[10px] overflow-hidden flex-shrink-0">
            <img key={image} alt={title} className="w-full h-full object-cover" src={image} />
          </div>
          <div className="flex gap-2 flex-wrap mt-2">
            {tags.map((tag, index) => (
              <div key={index} className="bg-[rgba(123,49,110,0.5)] px-2 py-[2px] rounded-[8px]">
                <p className="font-['Archivo:Regular',sans-serif] font-normal text-[18px] md:text-[22px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {tag}
                </p>
              </div>
            ))}
          </div>
          <p className="font-['Archivo:Regular',sans-serif] font-normal text-[24px] md:text-[28px] text-white mt-2" style={{ fontVariationSettings: "'wdth' 100" }}>
            {title}
          </p>
          <p className="font-['Archivo:Medium',sans-serif] font-medium text-[16px] md:text-[18px] text-white leading-relaxed mt-2" style={{ fontVariationSettings: "'wdth' 100" }}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

function ProjectCards() {
  return (
    <div className="max-w-7xl mx-auto px-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          image={imgFrame114}
          tags={["Web Development"]}
          title="Brown Issues Website Redesign"
          description="Designed and developed key website pages for a client, including a Civic Leadership and Power Building page and Contact Page, using WordPress and Figma. Built custom JavaScript components and integrated a functional contact form with SMTP email delivery via WPForms..."
        />
        <ProjectCard
          image={imgFrame115}
          tags={["Web Design"]}
          title="Digital Nest Website Redesign"
          description="Redesigned the Contact and Blog pages for the Digital NEST website in Figma, applying core design principles and leveraging auto-layout and prototyping to produce polished, fully scalable mockups. Collaborated within a 10-person team to deliver cohesive design work..."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          image={imgFrame116}
          tags={["Poster Design"]}
          title="Nestival Flyers"
          description="Digital NEST needed a compelling visual presence across multiple platforms and locations for their Nestival event. Designed and produced a full set of promotional materials — including countdowns, banners, flyers, and social media graphics — with custom-built assets tailored to specific audiences..."
        />
        <ProjectCard
          image={imgFrame117}
          tags={["Branding", "Web Design"]}
          title="BizzNest Rebrand"
          description="BizzNest needed a complete visual overhaul, their existing branding lacked cohesion and didn't reflect the organization's identity. Working within a 3-person team, redesigned the brand from scratch, producing a new logo, comprehensive style guide, brand guidelines, custom assets..."
        />
      </div>
    </div>
  );
}


function Nav() {
  return (
    <div className="flex font-['Archivo:Regular',sans-serif] font-normal gap-3 md:gap-4 items-center text-[18px] md:text-[22px]">
      <Link to="/" className="decoration-solid underline hover:text-gray-300" style={{ fontVariationSettings: "'wdth' 100" }}>
        HOME
      </Link>
      <Link to="/about" className="hover:text-gray-300" style={{ fontVariationSettings: "'wdth' 100" }}>
        ABOUT
      </Link>
      <Link to="/projects" className="hover:text-gray-300" style={{ fontVariationSettings: "'wdth' 100" }}>
        PROJECTS
      </Link>
      <a href="https://drive.google.com/file/d/1vJoL18C36K93fbqF7secC2yu3LIqfBgj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" style={{ fontVariationSettings: "'wdth' 100" }}>
        RESUME
      </a>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-black text-white sticky top-0 z-50" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '6px', paddingBottom: '6px' }}>
      <div className="w-full flex items-center justify-between gap-4">
        <p className="font-['Archivo:ExtraLight',sans-serif] font-extralight text-[28px] md:text-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          MITCHELL RAPOSA
        </p>
        <Nav />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#313131] min-h-screen w-full">
      <Header />
      <div className="w-full h-[400px] md:h-[605px]">
        <Hero />
      </div>
      <div className="py-8 space-y-16">

        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-['Archivo:Regular',sans-serif] font-normal text-[28px] md:text-[36px] text-white underline mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            ABOUT
          </h2>
          <AboutSection />
        </div>

        <div>
          <div className="max-w-7xl mx-auto px-8 mb-8">
            <h2 className="font-['Archivo:Regular',sans-serif] font-normal text-[28px] md:text-[36px] text-white underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              PROJECTS
            </h2>
          </div>
          <ProjectCards />
        </div>

        <div>
          <div className="max-w-7xl mx-auto px-8 mb-8">
            <h2 className="font-['Archivo:Regular',sans-serif] font-normal text-[28px] md:text-[36px] text-white underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              EXPERIENCE
            </h2>
          </div>
          <ExperienceCards />
        </div>
      </div>

      <Footer />
    </div>
  );
}
