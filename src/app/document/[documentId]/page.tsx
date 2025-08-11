import Editor from "../components/Editor";
import Navbar from "../components/Navbar";
import Toolbar from "../components/Toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const { documentId } = await params;
  return (
    <>
      <Navbar />
      <Toolbar />
      <Editor documentId={documentId} />
    </>
  );
}
