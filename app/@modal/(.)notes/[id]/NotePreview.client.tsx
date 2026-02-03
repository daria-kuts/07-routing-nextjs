"use client";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import previewCss from "./NotePreview.module.css"
import modalCss from "../../../../components/Modal/Modal.module.css"
interface Props {
  id: string;
}


export default function NotePreviewClient({ id }: Props) {
  const router = useRouter();
  const { data, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error loading note</p>;

  return (
    <div className={modalCss.backdrop} onClick={() => router.back()}>
      <div onClick={(e) => e.stopPropagation()}></div>
      <div className={previewCss.container}>
        <h2 className={previewCss.header}>{data.title}</h2>
        <p className={previewCss.tag}>{data.tag}</p>
        <p className={previewCss.content}>{data.content}</p>
        <small className={previewCss.date}>{data.createdAt}</small>
      </div>
    </div>
  );
}
