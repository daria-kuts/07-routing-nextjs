import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { fetchNotes } from "../../../../lib/api";
import { getQueryClient } from "../../../../components/TanStackProvider/getQueryClient";
import NotesClient from "../../Notes.client";

interface Props {
 params: Promise<{
    tag?: string[];
  }>;
}

export default async function FilteredNotesPage({ params }: Props) {
  const { tag } = await params;

  const selectedTag: string | undefined =
    !tag || tag[0] === "all" ? undefined : tag[0];

  return <NotesClient tag={selectedTag} />;
}