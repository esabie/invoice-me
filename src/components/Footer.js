export default function Footer({name, email, website, bankName, bankAccount}) {
    return (
        <>

      <footer className="footer border-t-2 borger-black-300 pt-5" >
        <ul className="flex flex-wrap items-center justify-center">
          <li><span className="font-bold">Your name:</span> {name} </li>
          <li><span className="font-bold">Your email:</span> {email} </li>
          <li><span className="font-bold">Bank: </span> {bankName} </li>
          <li><span className="font-bold">Account holder name:</span> {name} </li>
          <li><span className="font-bold">Account number:</span> {bankAccount} </li>
        </ul>
      </footer>


        </>
    )
}
