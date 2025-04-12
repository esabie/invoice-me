export default function ClientDetails ({clientName, cemail}) {
    return (
        <>
      <section className="mt-5">
        <h2 className="text-xl uppercase">{clientName}</h2>
        <p>{cemail}</p>
      </section>
        </>
    )
}