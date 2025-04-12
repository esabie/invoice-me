export default function Dates ({invoiceNumber, invoiceDate, dueDate}) {
    return (
        <>
      <article className="my-5 flex flex-col items-end">
        <ul>
          <li>
            <span className="font-bold">Invoice number:</span> {invoiceNumber}
          </li>
          <li className="bg-gray-100" >
            <span className="font-bold">Invoice date:</span> {invoiceDate}
          </li>
          <li>
            <span className="font-bold">Due date:</span> {dueDate}
          </li>
        </ul>
      </article>
        </>
    )
}