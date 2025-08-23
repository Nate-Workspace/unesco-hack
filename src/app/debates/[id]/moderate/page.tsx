import ModerateClient from "./_components/ModerateClient";

export default function Page({ params }: { params: { id: string } }) {
  return <ModerateClient params={params} />;
}
