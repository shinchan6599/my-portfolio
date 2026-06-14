import type { Metadata } from "next";
import { destinations } from "../data";
import CountryContent from "./CountryContent";

export function generateStaticParams() {
  return destinations.map((d) => ({ countryId: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ countryId: string }>;
}): Promise<Metadata> {
  const { countryId } = await params;
  const dest = destinations.find((d) => d.id === countryId);
  if (!dest) return { title: "Destination" };
  return {
    title: dest.name,
    description: dest.description,
    alternates: { canonical: `/travel/${dest.id}` },
    openGraph: {
      title: `${dest.name} — Dhyey Bhansali`,
      description: dest.description,
      images: [dest.image],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ countryId: string }>;
}) {
  const { countryId } = await params;
  return <CountryContent countryId={countryId} />;
}
