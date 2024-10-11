export default function PaymentMethods() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            Make the Difference Today!
          </h2>
          <p className="mt-3 text-xl text-gray-400 sm:mt-4">
            Your contribution goes a long way.
          </p>
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-1 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-5 py-3 border-b-2 border-gray-700">
            <div className="order-2 mt-2 text-left text-lg font-medium leading-6 text-indigo-200">
                <h3 className="order-1 text-2xl font-bold tracking-tight text-gray-800 mb-3">Mpesa</h3>
               <p className="text-gray-600">Paybill: 247 247</p>
               <p className="text-gray-600">Account No: 0560285782372</p>
            </div>
            <div className="order-1">
                <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                    <img src="/payments/1.png" className="w-[200px] "/>
                </dd>
            
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 sm:mt-0 py-3 border-b-2 border-gray-700">
             <div className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                <h3 className="order-1 text-2xl font-bold tracking-tight text-gray-800 mb-3">Equity Bank (Kenya) Limited</h3>
                <div className="grid sm:grid-cols-2 gap-2 text-left text-gray-600">
                    <p>Account Name: Joe Sang Foundation</p>
                <p>Account Number: 0560285782372</p>
                <p>Swift Code: EQBLKENA</p>
                <p>Currency: KES</p>
                <p>Bank Code: 68 </p>
                <p>Branch Code: 056 </p>
                </div>
            </div>
            <div className="order-1">
                <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                 <img src="/payments/2.png" className="w-[200px]"/>
            </dd>
            
            </div>
          </div>
          <div className="mt-10 flex flex-col lg:flex-row items-center sm:mt-0 py-3 border-b-2 border-gray-700">
            <div className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                <h3 className="order-1 text-2xl font-bold tracking-tight text-gray-800 mb-3">Co-operative Bank of Kenya</h3>
                <div className="grid sm:grid-cols-2 text-left gap-2 text-gray-600">
                    <p>Account Name: Joe Sang Foundation</p>
                <p>Account Number: 01101217532001</p>
                <p>Branch: Industrial Area</p>
                <p>Swift Code: KCOOKENA </p>
                <p>Bank Code: 11 </p>
                <p>Branch Code: 1007 </p>
                </div>
                
            </div>
           <div className="order-1">
             <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                <img src="/payments/3.png" className="w-[200px]"/>
            </dd>
            
           </div>
          </div>
        </dl>
      </div>
    </div>
  )
}
