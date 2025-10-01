import { ProductionCompany } from "@/src/types/type";
import Image from "next/image";
import { FC } from "react";

import Unknown from "@/public/logo/unknown-logo.png";

interface ProductionCompaniesProps {
  productionCompanies: ProductionCompany[] | undefined;
}

const ProductionCompanies: FC<ProductionCompaniesProps> = ({
  productionCompanies,
}) => {
  return (
    <div className="w-11/12 mx-auto py-2">
      <div className="flex flex-wrap justify-evenly items-center gap-6">
        {productionCompanies?.map((company) => (
          <div
            key={company.id}
            className="relative h-[150] min-w-[50] max-w-[300] flex items-center justify-center bg-transparent"
          >
            {company.logo_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                alt={`${company.name} logo`}
                width={300}
                height={150}
                className="h-full w-auto object-contain"
                draggable={false}
              />
            ) : (
              <div className="inline-flex flex-col items-center gap-2">
                <Image
                  src={Unknown}
                  alt="Unknown"
                  width={150}
                  height={150}
                  draggable="false"
                />
                <span className="text-black font-agenorNeueRegular text-2xl text-pretty">
                  {company.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductionCompanies;
