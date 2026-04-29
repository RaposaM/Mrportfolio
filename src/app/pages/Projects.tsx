import { Link } from "react-router";
import imgFrame1321321351 from "../../imports/DesignPortfolioProjectsPage/7107f6377586a0dc82027304be6a6a2184c18d3f.png";
import imgFrame1321321352 from "../../imports/DesignPortfolioProjectsPage/2f07f2889eb21c8afeab86cf965de76136dca99b.png";
import imgFrame1321321353 from "../../imports/DesignPortfolioProjectsPage/68f16bb603e89abe668b82b22f9981f474067565.png";
import imgFrame1321321354 from "../../imports/DesignPortfolioProjectsPage/091837a1e66e40431196c2a9cdb6d3580ee8df9c.png";
import imgFrame1321321355 from "../../imports/DesignPortfolioProjectsPage/9c2e48477ac702dfba6b62a9f0e8df59cbc60363.png";

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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between text-white">
        <p className="font-['Ancizar_Serif:SemiBold',sans-serif] font-semibold text-[32px] md:text-[40px]">Contact Me!</p>
        <Links />
      </div>
    </div>
  );
}

function ProjectShowcase({ image, title, tags, description }: { image: string; title: string; tags: string[]; description: string }) {
  return (
    <div className="bg-[#565656] rounded-[20px] overflow-hidden transition-all duration-300 hover:bg-[#7B316E] hover:translate-y-[-2px] hover:shadow-lg">
      <div className="p-4 md:p-5">
        <div className="h-[400px] md:h-[558px] rounded-[20px] overflow-hidden mb-4">
          <img
            key={image}
            alt={title}
            className="w-full h-full object-contain"
            src={image}
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <p className="font-['Archivo:Regular',sans-serif] font-normal text-[28px] md:text-[36px] text-white mb-3 md:mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
              {title}
            </p>
            <div className="flex gap-3 flex-wrap mb-3 md:mb-0">
              {tags.map((tag, index) => (
                <div key={index} className="bg-[rgba(123,49,110,0.5)] px-3 py-1 rounded-[8px]">
                  <p className="font-['Archivo:Regular',sans-serif] font-normal text-[18px] md:text-[22px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="font-['Archivo:Regular',sans-serif] font-normal text-[15px] md:text-[17px] text-white leading-relaxed md:w-[584px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex font-['Archivo:Regular',sans-serif] font-normal gap-3 md:gap-4 items-center text-[18px] md:text-[22px]">
      <Link to="/" className="hover:text-gray-300" style={{ fontVariationSettings: "'wdth' 100" }}>
        HOME
      </Link>
      <Link to="/about" className="hover:text-gray-300" style={{ fontVariationSettings: "'wdth' 100" }}>
        ABOUT
      </Link>
      <Link to="/projects" className="decoration-solid underline hover:text-gray-300" style={{ fontVariationSettings: "'wdth' 100" }}>
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

export default function Projects() {
  return (
    <div className="bg-[#313131] min-h-screen w-full">
      <Header />
      <div className="py-8 space-y-8">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-['Archivo:Regular',sans-serif] font-normal text-[28px] md:text-[36px] text-white underline mb-8" style={{ fontVariationSettings: "'wdth' 100" }}>
            PROJECTS
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-8 space-y-8">
          <ProjectShowcase
            image={imgFrame1321321355}
            title="Brown Issues Website Redesign"
            tags={["Web Development", "Web Design"]}
            description="Designed and developed key website pages for a client, including a Civic Leadership and Power Building page and Contact Page, using WordPress and Figma. Built custom JavaScript components and integrated a functional contact form with SMTP email delivery via WPForms, enabling reliable client-to-organization communication."
          />

          <ProjectShowcase
            image={imgFrame1321321354}
            title="Digital Nest Website Redesign"
            tags={["Web Design", "Branding"]}
            description="Redesigned the Contact and Blog pages for the Digital NEST website in Figma, applying core design principles and leveraging auto-layout and prototyping to produce polished, fully scalable mockups. Collaborated within a 10-person team to deliver cohesive design work aligned with the organization's brand."
          />

          <ProjectShowcase
            image={imgFrame1321321353}
            title="Nestival Flyers"
            tags={["Poster Design", "Branding"]}
            description="Digital NEST needed a compelling visual presence across multiple platforms and locations for their Nestival event. Designed and produced a full set of promotional materials — including countdowns, banners, flyers, and social media graphics — with custom-built assets tailored to specific audiences and locations, gaining hands-on experience translating marketing strategy into effective visual communication."
          />

          <ProjectShowcase
            image={imgFrame1321321352}
            title="BizzNest Rebrand"
            tags={["Web Design", "Branding"]}
            description="BizzNest needed a complete visual overhaul, their existing branding lacked cohesion and didn't reflect the organization's identity. Working within a 3-person team, redesigned the brand from scratch, producing a new logo, comprehensive style guide, brand guidelines, custom assets, and landing pages to establish a consistent and professional identity across all touchpoints."
          />

          <ProjectShowcase
            image={imgFrame1321321351}
            title="Freelance Graphic Design Work"
            tags={["Poster Design", "Branding"]}
            description="Some of my earliest design work, and probably my most viewed. Worked with bands, venues, and event promoters to come up with flyer designers for local shows happening in Modesto and all across the Central Valley. Built up a lot of my foundation in client work, design skills, and event promotion."
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
