interface Props {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
}

export default function Mobile(props: Props) {
  return (
    <div>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-900 sm:text-sm ">+254</span>
        </div>
        <input
        required
          value={props.phone}
          onChange={(e) => props.setPhone(e.target.value)}
          type="text"
          name="price"
          id="price"
          className="block w-[50%] rounded-md border-gray-300 border py-2.5 pl-12 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="7XXXXXX"
        />
      </div>
    </div>
  );
}
