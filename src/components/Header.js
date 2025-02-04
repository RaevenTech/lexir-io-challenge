import Image from "next/image";
import Link from "next/link";
import logoBlk from "../public/assets/header/logoBlk.png";
import basket from "../public/assets/header/shopBasket.png";
import avatar from "../public/assets/header/userAvatar.png";

const Header = () => {
    return (
        <header className="flex w-full  shadow-lg shadow-rose-100 font-main  ">
            <div
                id="header__container"
                className="flex justify-between items-center w-[1280px] h-[104px] ml-10 px-4 text-black bg-white "
            >
                <Link href="/">
                    <div className="pl-[20px]">
                        <Image className="ml-[34px]" src={logoBlk} alt="logo" />
                    </div>
                </Link>
                <div className="flex flex-row items-center justify-between mr-[34px]">
                    <Link href="/products">
                        <div className="mr-10 cursor-pointer hover:text-rose-300  duration-100">
                            PRODUCTS
                        </div>
                    </Link>
                    <Link href="/brands">
                        <div className="mr-10 hover:text-rose-300   duration-100">
                            BRANDS
                        </div>
                    </Link>
                    <Link href="/signIn">
                        <div className="flex flex-row mr-10 hover:text-rose-300   duration-100 ">
                            <Image src={avatar} alt="logo" />
                            <span className="ml-[8px] ">SIGN IN</span>
                        </div>
                    </Link>
                    <Link href="/cart">
                        <div className="flex flex-row">
                            <Image src={basket} alt="basket" className="" />
                            <span className="ml-[8px] hover:text-rose-300   duration-100">
                                CART
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};
export default Header;
