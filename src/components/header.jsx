import searchIcon from '../assets/search.svg';
import profileIcon from '../assets/profile.svg';
import cartIcon from '../assets/cart.svg';
import navIcon from '../assets/nav.svg';

const navItems = ['The edit', 'New Arrivals', 'Designers', 'clothing', 'shoes', 'bags', 'accessories', 'jewelery', 'beauty', 'home'];

const Header = () => {

    return(
        <header class="flex flex-row flex-wrap justify-between mx-2 md:mx-20 py-5 sticky top-0 bg-white z-10">
            <nav class="flex flex-row" >
                <h1 class='text-xl font-normal md:mr-20'>MY COMPANY.com</h1>
                <ul class="items-start text-sm hidden md:flex">
                    {navItems.map((item) => {
                        return(
                            <li class="mx-4 my-6 md:my-0">
                                <a href="#" class="uppercase text-black">{item}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div class='flex flex-row'>
                <img src = {searchIcon} alt="Search" class='mr-4 md:mr-4'/> 
                <img src = {cartIcon} alt="cart" class='mr-2 md:mr-4'/> 
                <img src = {profileIcon} alt="Profile" class='hidden md:block'/> 
                <img src = {navIcon} alt="Navbar" class="block md:hidden ml-2"/> 
            </div>
        </header>
    );
}

export default Header;