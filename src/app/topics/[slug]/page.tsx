
export default function TopicPage({ params }: { params: { slug: string } }) {
  return (
    <main className="flex flex-col justify-start min-h-screen w-full globalMaxW pt-1 px-1 mb-10">
        <div className="bg-white p-2 w-full h-fit m-2 rounded-lg">
          <h1 className="font-bold text-2xl my-4 mx-1">#{params.slug}</h1>
          <p className="mx-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam dolor assumenda debitis? Delectus deserunt necessitatibus inventore illum perferendis? Perspiciatis quidem totam, sit error quod asperiores quis placeat cumque facere.
          </p>
        </div>

        <div className="my-2">
          
        </div>
    </main>
  )
}
