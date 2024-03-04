import Editprofile from "@/app/(site)/profile/editprofile/page";

const getTopicById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params } : any) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <Editprofile />;
}