export default function TableForm ({description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount}) {
    return (
        <>
        <div className="flex flex-col">
            <label htmlFor="description"> Item Description</label>
            <input type="text"
            name="description"
            id="description"
            placeholder="Item Description" value={description}
            onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="flex flex-col">
            <label htmlFor="quantity"> Quantity</label>
            <input type="text"
            name="quantity"
            id="quantity"
            placeholder="Quantity" value={quantity}
            onChange={(e) => setQuantity(e.target.value)} />
        </div>

        <div className="flex flex-col">
            <label htmlFor="price"> Price</label>
            <input type="text"
            name="price"
            id="price"
            placeholder="Price" value={price}
            onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div className="flex flex-col">
            <label htmlFor="amount"> Amount</label>
            <input type="text"
            name="amount"
            id="amount"
            placeholder="amount " value={amount}
            onChange={(e) => setAmount(e.target.value)} />
        </div>

        </>
    )
}