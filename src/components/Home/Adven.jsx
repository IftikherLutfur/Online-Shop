
const Adven = () => {
    return (
        <div>
            <div className="flex justify-between mx-10 my-5">

                <div className="flex gap-3 border-2 border-dotted p-4 items-center bg-green-300">
                    <div>
                        logo
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">On time Delivery</h1>
                        <p className="opacity-85">Product get within 4-5 days</p>
                    </div>
                </div>


                <div className="flex gap-3 border-2 border-dotted p-4 items-center bg-pink-400">
                    <div>
                        logo
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">24/7 Support</h1>
                        <p className="opacity-85">Customer Support</p>
                    </div>
                </div>


                <div className="flex gap-3 border-2 border-dotted p-4 items-center bg-red-400">
                    <div>
                        logo
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Secure Payment</h1>
                        <p className="opacity-85">Card/Mobile Banking</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adven;