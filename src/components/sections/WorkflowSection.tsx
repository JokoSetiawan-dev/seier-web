import React from "react";

interface ServiceStep {
  title: string;
  description: string;
}

interface ServiceTimelineProps {
  steps: ServiceStep[];
}

const ServiceTimeline: React.FC<ServiceTimelineProps> = ({ steps }) => {
  return (
    <section className="my-[50px] mx-[25px] tablet:my-[100px] tablet:mx-[50px] laptop:mx-[70px] desktop:mx-[150px] flex flex-col laptop:flex-row laptop:justify-between laptop:items-start">
      <div className="flex flex-col font-urbanist font-bold justify-center items-center laptop:justify-start laptop:items-start mb-[50px] tablet:mb-[100px]">
        <h1 className="text-[14px] tablet:text-[36px] laptop:text-[25px] desktop:text-[32px] text-[#5ABFAD]">
          Lihat bagaimana
        </h1>
        <h1 className="text-[18px] tablet:text-[48px] laptop:text-[32px] desktop:text-[40px] text-center laptop:text-start">
          Kami mewujudkan <br /> website bisnis anda
        </h1>
      </div>
      <div className="desktop:max-w-[600px] laptop:max-w-[500px]">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4 mb-8 last:mb-0">
            {/* Timeline dot and line */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-[#5ABFAD] shrink-0" />
              {index !== steps.length - 1 && (
                <div className="w-0.5 h-full bg-[#5ABFAD] my-1" />
              )}
            </div>

            {/* Content */}
            <div>
              <h3 className="font-urbanist font-bold text-lg mb-2 text-[14px] tablet:text-[28px] laptop:text-[22px] desktop:text-[28px]">
                {step.title}
              </h3>
              <p className="text-gray-600 font-poppins text-sm leading-relaxed text-[8px] tablet:text-[16px] laptop:text-[12px] desktop:text-[16px]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Example usage with the data from the image
export default function ServiceTimelineExample() {
  const steps = [
    {
      title: "Analisi bisnis kamu",
      description:
        "Melalui diskusi yang mendalam, kami memahami visi, target pasar, dan tujuan bisnis Anda. Pemahaman ini menjadi fondasi dalam menciptakan website yang benar-benar merepresentasikan brand Anda.",
    },
    {
      title: "Riset kompetitor",
      description:
        "Kami melakukan analisis komprehensif terhadap kompetitor Anda. Hal ini membantu kami mengidentifikasi peluang unik dan keunggulan bisnis yang akan kami tonjolkan dalam website.",
    },
    {
      title: "Desain UI/UX",
      description:
        "Kami merancang antarmuka yang tidak hanya menarik secara visual, tapi juga mudah dinavigasi. Setiap elemen didesain dengan cermat untuk menciptakan pengalaman pengguna yang nyaman dan efektif.",
    },
    {
      title: "Pengembangan",
      description:
        "Kami menggunakan teknologi terkini untuk memastikan website Anda tidak hanya cantik, tapi juga cepat, aman, dan responsif di semua perangkat.",
    },
    {
      title: "Rilis",
      description:
        "Sebelum meluncurkan website Anda, kami melakukan pengujian menyeluruh dan optimasi SEO untuk memastikan website tampil sempurna dan siap menarik pengunjung potensial.",
    },
  ];

  return <ServiceTimeline steps={steps} />;
}
