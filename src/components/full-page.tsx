
export default function FullPage({ title }: { title: string }) {
  return (
    <section className={`text-7xl h-screen w-full text-black flex items-center justify-center`} >
      {title}
    </section>
  )
}
