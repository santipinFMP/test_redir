import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>ZEUS HOMEPAGE</h1>
      <p>lets go</p>
      <Link href="/test">TEST</Link>
      <form action={async (form) => {
        'use server'

        redirect(`/search/results?some=${form.get('firstName')}`)
        // redirect(`/test`)
      }}>
        <input
            className="h-10 mb-4 px-2 py-0 w-full rounded border border-grey-40 text-black"
            name="firstName"
            placeholder="First name(s)"
          />
        <button type="submit">LETS GO</button>
      </form>
    </div>
  );
}
