
interface Props{
  amount: string
  setAmount:React.Dispatch<React.SetStateAction<string>>
}

export default function Amount(props:Props) {
  return (
    <div>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm"></span>
        </div>
        <input
        value={props.amount}
          type="number"
          required
          onChange={e => props.setAmount(e.target.value)}
          name="price"
          id="price"
          className="block w-[50%] rounded-md border-gray-300 border py-2.5 px-2.5  pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="0.00"
        />
       
      </div>
    </div>
  );
}
