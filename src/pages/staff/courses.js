import Button from "@/components/Button";

const links = [


    { name: 'FRONTEND', href: '#' },
    { name: 'BACKEND', href: '#' },
    { name: 'TESTING', href: '#' },
    { name: 'DIGITIAL MARKETING', href: '#' },
  ]

 
export default function Courses(){
    return(
        <div>
            <h1>Courses</h1>
            <div className="relative isolate overflow-hidden bg-gray-900 py-6 sm:py-8">
            
                <div className="mx-auto mt-4 max-w-2xl lg:mx-0 lg:max-w-none flex flex-row justify-between items-center">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                        <a key={link.name} href={link.href}>
                        {link.name}
                        </a>
                        ))}
                    </div>
                    <div className="text-white mr-20">Add Course
                    </div>
                    {/* <div> <Button text="add course" /> </div> */}
                </div>
            </div>
            <div>
                <ul>
                    <li className="flex flex-row justify-evenly gap-x-8  items-center ml-10">
                        <h6 className="mx-10">Batch One </h6>
                        <p>Timing</p>
                        <button className="bg-teal-950 text-white px-8 ">GO</button>
                    </li>
                    <li className="flex flex-row justify-evenly  gap-x-8 items-center ml-10">
                        <h6 className="mx-10">Batch Two</h6>
                        <p>Timing</p>
                        <button className="bg-teal-950 text-white px-8">GO</button>
                    </li>
                    <li className="flex flex-row justify-evenly gap-x-8 items-center ml-10">
                        <h6 className="mx-10">Batch Three </h6>
                        <p>Timing</p>
                        <button className="bg-teal-950 text-white px-8">GO</button>
                    </li>
                    <li className="flex flex-row justify-evenly gap-x-8 items-center ml-10">
                        <h6 className="mx-10" >Batch Four </h6>
                        <p>Timing</p>
                        <button className="bg-teal-950 text-white px-8">GO</button>
                    </li>
                    <li className="flex flex-row justify-evenly gap-x-8 items-center ml-10 border border-yellow-800">
                        <h6 className="mx-10  border border-yellow-800 " >Batch Five </h6>
                        <p  className="border border-yellow-800">Timing</p>
                        <button className="bg-teal-950 text-white px-8 border border-yellow-800">GO</button>
                    </li>
                    <li className="flex flex-row justify-evenly gap-x-8 items-center ml-10">
                        <h6 className="mx-10">Batch Six </h6>
                        <p>Timing</p>
                        <button className="bg-teal-950 text-white px-8 rounded-full" >GO</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}