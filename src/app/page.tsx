
import {profile, experiences} from "@/data/resume";
export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-200">Eri Safari</h1>
        <p>{experiences.length} experiences</p>
    </main>
  );
}