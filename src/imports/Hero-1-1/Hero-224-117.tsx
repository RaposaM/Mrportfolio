import imgGridMed1 from "./caf0249ff3cc9f8ca83bf6e03f0a5adc2f2b3c1a.png";
import imgImg16131 from "./7862e0f6c729f093cd68f53eb25a9cc1aa438839.png";

export default function Hero() {
  return (
    <div className="bg-[#100015] opacity-80 overflow-hidden relative rounded-[16px] w-full h-full">
      
      {/* Grid covering entire hero */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url(${imgGridMed1})`,
          backgroundRepeat: "repeat",
          backgroundSize: "286px 286px",
        }}
      />

      {/* Text - bottom left */}
      <div className="absolute left-8 md:left-12 bottom-8 flex flex-col gap-2 z-10">
        <div className="font-['Archivo:SemiBold',sans-serif] font-semibold text-white text-[24px]">
          <p>Hello!</p>
          <p>my name is...</p>
        </div>
        <p
          className="font-['DM_Serif_Display:Regular',sans-serif] not-italic text-[64px] md:text-[96px] leading-tight bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(101.55deg, rgb(36, 198, 201) 13.557%, rgb(198, 85, 255) 97.115%)" }}
        >
          Mitchell Raposa
        </p>
        <p className="font-['Archivo:Regular',sans-serif] text-white text-[20px] md:text-[24px]">
          Web Designer | Graphic Designer | Chemistry Student
        </p>
      </div>

{/* Circle */}
      <div
        className="hidden md:block absolute w-[300px] md:w-[420px] aspect-square rounded-full bg-[#E75800] border-4 border-white z-10"
        style={{ right: '100px', top: '15%' }}
      />

      {/* Photo - in front of circle, cut off by hero bottom */}
      <div
        className="hidden md:block absolute w-[300px] md:w-[420px] z-20 overflow-visible"
        style={{ right: '100px', top: '15%' }}
      >
        <img
          src={imgImg16131}
          alt="Mitchell Raposa"
          className="w-full object-cover object-top"
          style={{ height: '130%' }}
        />
      </div>

    </div>
  );
}