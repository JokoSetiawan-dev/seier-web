import { PricingCard } from "../ui/PricingCard";

const essentialFeatures = [
  { text: "Next.Js framework" },
  { text: "Single page website" },
  { text: "Up to 10 sections" },
  { text: "Domain .com (1 tahun)" },
  { text: "Optimasi SEO" },
  { text: "Exclusive UI/UX Design" },
  { text: "Responsive di semua device" },
  { text: "SSL/HTTPS security" },
  { text: "Global CDN" },
  { text: "Gratis maintenance 3 bulan" },
];

const businessFeatures = [
  { text: "Next.Js framework" },
  { text: "Multi page website ( max 5 page )" },
  { text: "Up to 10 sections/page" },
  { text: "Domain .com (1 tahun)" },
  { text: "Optimasi SEO" },
  { text: "Exclusive UI/UX Design" },
  { text: "Responsive di semua device" },
  { text: "SSL/HTTPS security" },
  { text: "Global CDN" },
  { text: "Gratis maintenance 6 bulan" },
];

const customFeatures = [
  { text: "Pengembangan Website Custom" },
  { text: "Pembuatan Aplikasi Mobile (iOS & Android)" },
  { text: "Desain UI/UX yang Intuitif" },
];

export default function PricingSection() {
  return (
    <section className="my-[50px] mx-[25px] tablet:my-[100px] tablet:mx-[50px] laptop:mx-[70px] desktop:mx-[150px] flex flex-col items-center laptop:items-start">
      <div className="flex flex-col font-urbanist font-bold justify-center items-center laptop:justify-start laptop:items-start mb-[50px] tablet:mb-[100px]">
        <h1 className="text-[14px] tablet:text-[36px] laptop:text-[25px] desktop:text-[32px] text-[#5ABFAD]">
          Let's start
        </h1>
        <h1 className="text-[18px] tablet:text-[48px] laptop:text-[32px] desktop:text-[40px] text-center laptop:text-start">
          Pilih paket anda
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center max-w-[270px] tablet:w-full tablet:max-w-full tablet:flex-row">
        <PricingCard title="Essential" price="Rp. 2.200.000" className="rounded-t-[15px] tablet:rounded-t-[25px] laptop:rounded-l-[20px] laptop:rounded-r-[0px]" features={essentialFeatures} />
        <PricingCard title="Business +" price="Rp. 2.200.000" features={businessFeatures} />
        <PricingCard
          className="rounded-b-[15px] tablet:rounded-b-[50px] laptop:rounded-r-[20px] laptop:rounded-b-[0px]"
          title="Custom"
          customText="Contact us"
          features={customFeatures}
          isCustom
        />
      </div>
    </section>
  );
}
