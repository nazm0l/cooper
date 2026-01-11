import Image from "next/image";

const partnerList = [
  { name: "facebook", image: "/facebook-icon.svg" },
  { name: "hubspot", image: "/hubspot-icon.svg" },
  { name: "airbnb", image: "/airbnb-icon.svg" },
  { name: "microsoft", image: "/microsoft-icon.svg" },
  { name: "hubspot", image: "/hubspot-icon.svg" },
  { name: "facebook", image: "/facebook-icon.svg" },
];

export default function PartnerSection() {
  return (
    <div className="container mx-auto w-full py-20">
      <div className="flex items-center justify-center gap-20">
        {partnerList.map((item, index) => (
          <div
            key={index}
            className="relative w-32 h-32 flex items-center justify-center "
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
