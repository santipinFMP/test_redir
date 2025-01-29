"use client";

import { notFound, useSearchParams, useRouter } from "next/navigation";

export default function RedirectPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const nextPage = searchParams.get("nextPage");

  if (!nextPage) {
    return notFound();
  }

  const decodedNextPath = decodeURIComponent(nextPage as string);
  const newUrl = new URL(`http://localhost${decodedNextPath}`).toString()

  console.log(newUrl)

  return router.push(newUrl);

}
