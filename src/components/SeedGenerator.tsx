import { useNavigate } from "react-router";

const SeedGenerator = () => {
    const navigate = useNavigate();

    const genClick = () => {
       navigate('/generate'); 
    }

    const importClick = () => {
        navigate('/import');
    }

    return (
        <div className="grid grid-cols-1 w-screen bg-black h-screen">
            <div className="w-screen flex justify-center items-end h-full">
                <h1 className="text-white text-3xl">Welcome to your Web3 Wallet</h1>
            </div>
            <div className="w-screen flex items-start justify-center">
                <button className="rounded-full bg-white p-4 m-4 mt-8" onClick={importClick}>Import Wallet</button>
                <button className="rounded-full bg-red-600 p-4 m-4 mt-8" onClick={genClick}>Generate Seed</button>
            </div>
        </div>
    )
}

export default SeedGenerator