import Layout from "@/layout";
import {Metadata} from "../utils";
import { Logo } from "@/components/section1";

export default function Home({metadata}) {
  return (
    <Layout metadata={metadata}
    >
      <Logo/>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const title = 'Homepage | React Essentials'
  const description = "React Essentials description"
  const subject = "React Essentials"

  const metadata = Metadata(title, description, subject)
  return {
    props: {
      metadata
    }
  }
}