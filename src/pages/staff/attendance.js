const links = [


        { name: 'FRONTEND', href: '#' },
        { name: 'BATCH NUMBER', href: '#' },
        { name: 'TIME', href: '#' },
        { name: 'STAFF NAME', href: '#' },
        { name: 'WEEK', href: '#' },
        { name: 'MONTH', href: '#' },
      ]
    
    export default function Attendances(){
        return(
            <>
                <h1> Attendances</h1>
                <div className="relative isolate overflow-hidden bg-gray-900 py-6 sm:py-8">
                    <div className="mx-auto mt-4 max-w-2xl lg:mx-0 lg:max-w-none flex flex-row justify-between items-center">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                            <a key={link.name} href={link.href}>
                            {link.name}
                            </a>
                            ))}
                        </div>                        
                    </div>
                </div><br/><br/>
                <table className="border-separate border border-slate-500">
                <thead>
                    <tr  >
                        <th className="border border-slate-600">Sl no</th>
                        <th className="border border-slate-600">Name</th>
                        <th className="border border-slate-600">01</th>
                        <th className="border border-slate-600">02</th>
                        <th className="border border-slate-600">03</th>
                        <th className="border border-slate-600">04</th>
                        <th className="border border-slate-600">05</th>
                        <th className="border border-slate-600">06</th>
                        <th className="border border-slate-600">07</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-pink-700">1</td>
                        <td className="border border-pink-700">lalith</td>
                        <td className="border border-pink-700"></td>
                        <td className="border border-pink-700"> </td>
                        <td className="border border-pink-700"> </td>
                        <td className="border border-pink-700"> </td>
                        <td className="border border-pink-700"> </td>
                        <td className="border border-pink-700"> </td>
                        <td className="border border-pink-700"> </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>logan</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>ajay</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>mani</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>ananth</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>kali</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>rakesh</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>deepak</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>kabilan</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>naveen</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>partha</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    </tbody>    
                </table>

    
            </>
        )
 };