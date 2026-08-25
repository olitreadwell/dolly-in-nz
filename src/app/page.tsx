/**
 * Landing page for a freshly scaffolded template app.
 *
 * @returns The homepage section
 */
export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-4 px-6">
      <h1 className="text-3xl font-semibold">Starter Template</h1>
      <p className="text-neutral-600">
        Scaffold new repos from this template. Quality gates, docs, and automation are already
        wired.
      </p>
      <a className="text-blue-600 underline" href="/health">
        Health check
      </a>
    </main>
  );
}
