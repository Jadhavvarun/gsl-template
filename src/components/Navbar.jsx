import logo from "../assets/getshortlink.png"

export default function Navbar() {
    return (
        <div className="bg-white py-3 px-6 border-b shadow-b-xl sticky top-0">
            <div className="flex justify-between items-center">
                <div className="flex gap-24 items-center">
                    {/* logo */}
                    <img src={logo} alt="logo" className="h-9" />
                    <div>
                    <ul className="flex gap-12 font-semibold text-lg">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Pricing</li>
                        <li>API</li>
                    </ul>
                    </div>
                </div>
                <div className="flex gap-6 items-center">
                    <button className="border border-brand-400 border-gray-400 px-8 py-2 rounded-lg" >Sign Up</button>
                    <button className="bg-brand-400 text-white px-8 py-2 font-semibold rounded-lg transition ease-in-out duration-400 delay-150 hover:bg-brand-500">Sign in</button>
                </div>
            </div>   
        </div>
    )
}