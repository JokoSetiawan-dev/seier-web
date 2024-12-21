import Button from "./Button";

interface Feature {
  text: string;
}

interface PricingTierProps {
  title: string;
  price?: string;
  features: Feature[];
  isCustom?: boolean;
  customText?: string;
  className?: string;
}

export function PricingCard({
  title,
  price,
  features,
  isCustom,
  customText,
  className,
}: PricingTierProps) {
  return (
    <div
      className={`flex flex-col p-6 bg-white  border border-gray-200 w-full min-h-[475px] tablet:min-h-[550px] laptop:min-h-[600px] desktop:min-h-[750px] ${className}`}
    >
      <h3 className="text-[20px] laptop:text-[25px] desktop:text-[32px] font-urbanist font-bold">
        {title}
      </h3>
      <div className="mt-4 mb-8">
        {isCustom ? (
          <span className="text-[#5ABFAD] text-[24px] laptop:text-[30px] desktop:text-[40px] font-urbanist font-bold">
            {customText}
          </span>
        ) : (
          <span className="text-[#5ABFAD] text-[24px] laptop:text-[30px] desktop:text-[40px] font-urbanist font-bold">
            {price}
          </span>
        )}
      </div>
      <div className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className=" text-[11px] laptop:text-[12px] desktop:text-[16px] font-poppins font-normal">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <Button text="Pilih paket" href="/" variant="secondary" className="w-full" />
      </div>
    </div>
  );
}
