import imgFrame1321321355 from "./606685cf6a5b2cf8d9a8d0c0b501cfff9662f198.png";
import imgFrame1321321356 from "./dece30f12056abc4d5c63767c6286da2e9a0e6b3.png";
import imgFrame1321321357 from "../Frame_1321321356_(3).png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[396px] items-start overflow-clip p-[20px] relative rounded-[20px] shrink-0 w-full lg:w-[575px] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg cursor-pointer">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute left-[0.09%] max-w-none size-full top-[-0.13%]" src={imgFrame1321321355} />
      </div>
      <p className="font-['Archivo:Regular',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Current
      </p>
      <p className="font-['Archivo:Regular',sans-serif] font-normal h-[98px] leading-[normal] relative shrink-0 text-[17px] text-white w-[529px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        I am currently working as a Design Associate for Digital Nest, with on the job experience creating flyers, websites, and applications for corporate clients, using my proficiency in Figma, Photoshop, Wordpress.
      </p>
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[17px] text-white w-[388px]" style={{ fontVariationSettings: "'wdth' 100", marginTop: '16px' }}>{` When I’m not pursuing Design or Chemistry, my favorite thing to do is backpacking, I could spend days and weeks in the woods and have found that to be where I’m most happy.`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[190px] items-start overflow-clip p-[20px] relative rounded-[20px] shrink-0 w-full lg:w-[639px] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg cursor-pointer">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgFrame1321321356} />
      <p className="font-['Archivo:Regular',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Goals
      </p>
      <p className="font-['Archivo:Regular',sans-serif] font-normal h-[109px] leading-[normal] relative shrink-0 text-[17px] text-white w-[417px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`I have a strong passion for technology and science, with a growing academic foundation in Chemistry. I am currently pursuing a Bachelors in Chemistry with plans to transfer to UC Santa Cruz. `}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex font-['Archivo:Regular',sans-serif] font-normal gap-[10px] items-start leading-[0] list-disc relative shrink-0 text-[20px] text-white whitespace-nowrap">
      <ul className="block relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="mb-0 ms-[10px]">
          <span className="leading-[normal]">- Photoshop</span>
        </li>
        <li className="mb-0 ms-[10px]">
          <span className="leading-[normal]">- Illustrator</span>
        </li>
        <li className="mb-0 ms-[10px]">
          <span className="leading-[normal]">- Figma</span>
        </li>
        <li className="ms-[10px]">
          <span className="leading-[normal]">- Wordpress</span>
        </li>
      </ul>
      <ul className="block relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="mb-0 ms-[36px]">
          <span className="leading-[normal]">- Linux (Ubuntu)</span>
        </li>
        <li className="mb-0 ms-[36px]">
          <span className="leading-[normal]">- Terminal (Zsh/Bash)</span>
        </li>
        <li className="mb-0 ms-[36px]">
          <span className="leading-[normal]">- Python</span>
        </li>
        <li className="ms-[36px]">
          <span className="leading-[normal]">- Git</span>
        </li>
      </ul>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[190px] items-start overflow-clip p-[20px] relative rounded-[20px] shrink-0 w-full lg:w-[639px] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg cursor-pointer">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgFrame1321321357} />
      <p className="font-['Archivo:Regular',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Skills
      </p>
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full lg:w-[639px]">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[16px] items-stretch relative w-full">
      <Frame />
      <Frame3 />
    </div>
  );
}