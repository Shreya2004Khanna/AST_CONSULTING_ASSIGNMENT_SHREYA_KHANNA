import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // For demo, just use the article index as title. In a real app, fetch article data here.
  return {
    title: `Article #${params.id} - Live Hindustan`,
    description: `Read full details for article #${params.id} from Live Hindustan.`
  };
}
