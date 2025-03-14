import Editor from "../components/Editor";
import Toolbar from "../components/Toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const { documentId } = await params;
  return (
    <>
      <Toolbar />
      <Editor />
    </>
  );
}
