import { useState } from "react"

const ImportSeed = () => {
    const [seed, setSeed] = useState<string[]>(Array(12).fill(''));

    const handleChange = (index: number, value: string) => {
        const updatedSeed = [...seed];
        updatedSeed[index] = value;
        setSeed(updatedSeed);
    }

    return (
        <div className="bg-black h-screen w-screen flex justify-center items-center">
            <div className="flex justify-center items-center w-full h-full">
                <div className="bg-[#323232] rounded-lg w-3/4 flex justify-center items-center flex-col py-10 h-3/4">
                    <div className="w-full flex px-24">
                        <h1 className="text-center text-3xl font-serif pb-4 text-white flex justify-start ">Import Seed</h1>
                    </div>
                    <div className="grid grid-cols-3 place-items-center w-full">
                        {
                            seed.map((value, index) => (
                                <input key={index} value={value} type="text" onChange={(e) => handleChange(index, e.target.value)} className="w-1/2 p-2 m-2 rounded-lg" placeholder={`${index + 1}`} />
                            ))
                        }
                        <button className="w-3/4 col-span-3  p-2 mt-8 bg-red-600 text-white rounded-full text-lg">Import</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImportSeed