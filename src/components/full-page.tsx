
export default function FullPage({ title }: { title: string }) {
  return (
    <section className={`lg:text-7xl text-3xl h-screen w-full text-black flex items-center justify-center`} >
      {title}
    </section>
  )
}
