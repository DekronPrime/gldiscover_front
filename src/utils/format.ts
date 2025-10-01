import { StaticImageData } from "next/image";

export const formatCurrency = (amount: number | undefined): string => {
  if (!amount) return "Unknown";

  const parts = amount.toString().split(".");
  let integerPart = parts[0];

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return `$${integerPart}`;
};

export const formatRuntime = (runtime: number) => {
  if (!runtime || runtime < 0) {
    return "N/A";
  }

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (hours > 0 && minutes > 0) {
    return `${hours}h ${minutes}m`;
  } else if (hours > 0) {
    return `${hours}h`;
  } else {
    return `${minutes}m`;
  }
};

export const getSrc = (
  resource: string | null | undefined,
  placeholder: StaticImageData
): string | StaticImageData => {
  return resource
    ? `https://image.tmdb.org/t/p/original${resource}`
    : placeholder;
};
