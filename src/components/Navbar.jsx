import logo from "../assets/getshortlink.png"
import { FaUser } from "react-icons/fa6";

export default function Navbar() {
    return (
        <div className="bg-white py-3 px-6 border-b">
            <div className="flex justify-between items-center">
                <div>
                    {/* logo */}
                    <img src={logo} alt="logo" className="h-8" />
                </div>
                <div className="flex gap-6 items-center">
                    <ul className="flex gap-6 font-semibold">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Pricing</li>
                        <li>API</li>
                    </ul>
                    <FaUser />
                </div>
            </div>   
        </div>
    )
}