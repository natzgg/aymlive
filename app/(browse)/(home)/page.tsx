import { Suspense } from "react";

import { Results, ResultsSkeleton } from "./_components/results";

export default function Page() {
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<ResultsSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <Results />
      </Suspense>
    </div>
  );
}
