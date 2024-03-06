import Editprofile from "@/app/(site)/profile/editprofile/page";

export default async function EditTopic({ params } : any) {
  const { id } = params;
  return <Editprofile />;
}