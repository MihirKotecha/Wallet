import { generateMnemonic } from "bip39";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const GenerateSeed = () => {

    const [seed, setSeed] = useState<string[]>(Array(12).fill(''));
    const navigate = useNavigate();

    const generateSeed = async() => {
        const mn = await generateMnemonic();
        console.log(typeof mn);
        setSeed(mn.split(' '));
    };

    useEffect(() => {
        generateSeed();
    }, []);

    const handlelick = () => {
        localStorage.setItem('seed', seed.join(' '));
        navigate('/wallet');
    }

    return (
        <div className="bg-black h-screen w-screen flex justify-center items-center">
            <div className="flex justify-center items-center w-full h-full">
                <div className="bg-[#323232] rounded-lg w-3/4 flex justify-center items-center flex-col py-10 h-3/4">
                    <div className="w-full flex px-24 justify-center items-center">
                        <h1 className="text-center text-3xl font-serif pb-4 text-white flex justify-center items-center">Generated Seed</h1>
                    </div>
                    <div className="grid grid-cols-3 place-items-center w-full">
                        {
                            seed.map((value, index) => (
                                <input key={index} value={value} type="text" className="w-1/2 p-2 m-2 rounded-lg" placeholder={`${index + 1}`} />
                            ))
                        }
                        <h2 className="col-span-3 text-red-600 font-bold text-3xl mt-8">Make sure to save your seed phrase!!!</h2>
                        <button className="w-3/4 col-span-3  p-2 mt-8 bg-red-600 text-white rounded-full text-3xl" onClick={handlelick}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenerateSeed