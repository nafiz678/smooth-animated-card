
export default function FullPage({ title }: { title: string }) {
  return (
    <section className={`text-7xl h-screen w-full bg-background flex items-center justify-center`} >
      {title}
    </section>
  )
}
