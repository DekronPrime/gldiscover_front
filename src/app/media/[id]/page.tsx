import MediaPage from "@/src/pages/MediaPage";

export default async function MediaRoute({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { mediaType?: "movie" | "tv" };
}) {
  const id = Number(params.id);
  const mediaType = searchParams.mediaType ?? "movie";

  return <MediaPage id={id} mediaType={mediaType} />;
}
