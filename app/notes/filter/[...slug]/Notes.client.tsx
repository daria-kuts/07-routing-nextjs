"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

interface NotesClientProps {
  tag?: string;
}

export default function NotesClient({ tag }: NotesClientProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["notes", "filter", tag ?? "all"],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        tag,
      }),
    refetchOnMount: true,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error || !data) return <p>Something went wrong.</p>;

  return <NoteList notes={data.notes} />;
}
