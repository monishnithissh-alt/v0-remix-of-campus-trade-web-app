import { BackButton } from "@/components/back-button"

export default function HelpPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-4">
        <BackButton fallback="/" />
      </div>
      <h1 className="text-3xl font-semibold mb-4">Help</h1>
      <p className="text-muted-foreground">
        FAQs and support information. For urgent issues, use the in-app chatbot on seller pages.
      </p>
    </main>
  )
}
