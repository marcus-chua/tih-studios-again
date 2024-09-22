import Image from "next/image";

import {TihStudiosWebsite} from "@/components/tih-studios-website";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TihStudiosWebsite/>
    </main>
  );
}
