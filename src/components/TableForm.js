export default function TableForm ({description, setDescription}) {
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

        </>
    )
}