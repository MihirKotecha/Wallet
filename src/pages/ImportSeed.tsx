import { useState } from "react"

const ImportSeed = () => {
    const [seed, setSeed] = useState<string[]>(Array(12).fill(''));

    const handleChange = (index: number, value: string) => {
        const updatedSeed = [...seed];
        updatedSeed[index] = value;
        setSeed(updatedSeed);
    }

    return (
        <div className="bg-slate-700 h-screen w-screen flex justify-center items-center">
            <div className="flex justify-center items-center w-full">
                <div className="bg-slate-400 rounded-lg w-3/4 flex justify-center items-center flex-col py-10">
                    <h1 className="text-center text-2xl font-serif pb-4">Import Seed</h1>
                    <div className="grid grid-cols-3 place-items-center w-full">
                        {
                            seed.map((value, index) => (
                                <input key={index} value={value} type="text" onChange={(e) => handleChange(index, e.target.value)} className="w-1/2 p-2 m-2 rounded-lg" placeholder={`${index + 1}`} />
                            ))
                        }
                        <button className="w-3/4 col-span-3  p-2 mt-8 bg-slate-700 text-white rounded-lg">Import</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImportSeed