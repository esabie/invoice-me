import { useState } from "react";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Notes from "./components/Notes";
import Header from "./components/Header"
import MainDetails from "./components/MainDetails"
import ClientDetails from "./components/ClientDetails"
import Dates from "./components/Dates";



function App() {
  const [showInvoice, setShowInvoice] = useState (false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [clientEmail, setClientEmail] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")




  const handlePrint = () => {
    window.print()
  }
  return (
    <>
    <main className="m-10 p-5 md:mac-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
     
     {showInvoice ? <div>
        
            <Header handlePrint={handlePrint} />

            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

            <MainDetails name={name} address={address} />

            <ClientDetails clientName={clientName} cemail={clientEmail} />

            <Table />

            <Notes notes={notes} />

            <Footer name={name} bankName={bankName} bankAccount={bankAccount} email={email} website={website} />

            <button onClick={() => setShowInvoice (false)} className="mt-5 bg-blue-900 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-900
          hover:bg-transparent hover:text-blue-900 transition-all duration-300">Edit Invoice</button>
        </div>  : (
          <>
          <div className="flex flex-col justify-center">
            <label htmlFor="name" >Company Name</label>
            <input 
              type="text" 
              name="company" 
              id="text" 
              placeholder="Company name"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          <label htmlFor="address" >Address</label>
            <input 
              type="text" 
              name="address" 
              id="address" 
              placeholder="Enter your address"
              autoComplete="off"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            /> 

          <label htmlFor="email" >Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Enter your email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          <label htmlFor="phone" >Phone</label>
            <input 
              type="phone" 
              name="phone" 
              id="phone" 
              placeholder="Phone number"
              autoComplete="off"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

          <label htmlFor="clientName" >Client's Name</label>
            <input 
              type="text" 
              name="clientName" 
              id="clientName" 
              placeholder="Client's name"
              autoComplete="off"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />

          <label htmlFor="cemail" >Client's Email</label>
            <input 
              type="text" 
              name="cemail" 
              id="cemail" 
              placeholder="client@email.com"
              autoComplete="off"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
            />

          <label htmlFor="invoiceNumber" >Invoice Number</label>
            <input 
              type="text" 
              name="invoiceNumber" 
              id="invoiceNumber" 
              placeholder=""
              autoComplete="off"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />

          <label htmlFor="invoiceDate" >Invoice Date</label>
            <input 
              type="date" 
              name="invoiceDate" 
              id="invoiceDate" 
              placeholder=""
              autoComplete="off"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />

          <label htmlFor="dueDate" >Due Date</label>
            <input 
              type="date" 
              name="dueDate" 
              id="dueDate" 
              placeholder=""
              autoComplete="off"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            

          <label htmlFor="website" >Website</label>
            <input 
              type="url" 
              name="website" 
              id="website" 
              placeholder="https://yourwebsite.com"
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

          <label htmlFor="bank" >Enter your Bank name</label>
            <input 
              type="text" 
              name="bank" 
              id="bank" 
              placeholder="Enter the name of your bank"
              autoComplete="off"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />

            <label htmlFor="bankAccount" >Enter your Account number</label>
              <input 
                type="number" 
                name="account" 
                id="number" 
                placeholder="Enter your account number"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />

          <label htmlFor="notes" >Additional Area</label>
            <textarea 
              name="notes" 
              id="notes" cols="10" rows="5"
              placeholder="Additional notes to client" 
              value={notes} onChange={(e) => setNotes(e.target.value)}
              >
            </textarea>

          <button onClick={() => setShowInvoice (true)} className="bg-blue-900 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-900
          hover:bg-transparent hover:text-blue-900 transition-all duration-300">Preview Invoice</button>
          </div>
          </>
        )}
      

      


    </main>
    
    </>
  );
}

export default App;
