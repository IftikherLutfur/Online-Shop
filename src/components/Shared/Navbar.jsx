
const Navbar = () => {
    return (
       <div className="bg-black bg-opacity-70 z-20 text-white">
      <div className="flex items-center justify-between mx-10 py-3">
        <div className="flex items-center gap-3">
            <img className="w-16 h-12 rounded-xl" src="https://www.kaspersky.com/content/en-global/images/repository/isc/2021/safe_shopping_1.jpg" alt="" /> <h1>Online Dukan</h1>
        </div>
      
        <div className="flex gap-5">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Product</a>
       </div>
        
      </div>
       </div>
    );
};

export default Navbar;