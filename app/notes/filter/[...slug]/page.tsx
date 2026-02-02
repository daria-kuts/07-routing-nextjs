import NotesClient from "./Notes.client";

interface Props {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function FilteredNotesPage({ params }: Props) {
  const { slug } = await params;

  const tagFromUrl = slug?.[0];

  const selectedTag =
    !tagFromUrl || tagFromUrl === "all"
      ? undefined
      : tagFromUrl;

  return (
    <NotesClient
      key={selectedTag ?? "all"} 
      tag={selectedTag}
    />
  );
}

