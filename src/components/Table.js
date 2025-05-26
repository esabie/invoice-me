export default function Table ({description, quantity, price, amount}) {
    return (
        <>
            <table width="100%">
                <thead>
                    <tr className="bg-gray-300 p-1">
                        <td>Description</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Amount</td>
                    </tr>
                </thead>

            <tbody>
                <tr>
                    <td>{description}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td>{amount}</td>
                </tr>
            </tbody>
            </table>
           
        </>
    )
}