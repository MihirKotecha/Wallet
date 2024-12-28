const Wallet = () => {
    const seed: string[] = localStorage.getItem('seed')?.split(' ') || [];

    if (!seed || seed.length != 12) {
        return <h1>Seed not found!</h1>
    }

    return (
        <div className="h-screen w-sceen bg-black flex justify-center items-center">
            <div className="w-3/4 p-4 m-4 shadow-lg border-slate-400 border-4 flex justify-center items-center">
                <div className="w-1/2 border-2 mr-4">
                    <div className="bg-gradient-to-b from-teal-400 to-purple-500 p-4 m-4 rounded-md font-serif text-center text-white text-2xl ">SOLANA</div>
                </div>
                <div className="w-1/2 border-2">
                    <div className="bg-gradient-to-b from-teal-400 to-purple-500 p-4 m-4 rounded-md font-serif w-24 ">SOLANA</div>
                </div>
            </div>
        </div>
    )
}

export default Wallet