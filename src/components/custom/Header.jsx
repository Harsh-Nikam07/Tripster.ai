import { Button } from "@/components/ui/button"
// import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CiUser } from "react-icons/ci";


import { CiMenuFries } from "react-icons/ci";
import { useEffect } from "react";


const Header = () => {


  const user = JSON.parse(localStorage.getItem('userProfile'));


  useEffect(() =>{
    console.log(user)
  }, [])



  return (
    <>
    <div className=" flex justify-between items-center p-2 px-4 shadow-sm sticky top-0 bg-gray-00 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 z-10">
        <a href="/">
        <img className="w-40" src="/tripster-main-logo.svg" alt="Tripster Logo" />
        </a>
        <div className=" hidden md:visible lg:visible xl:visible w-fit md:flex justify-center items-center flex-row gap-2">
          
          {
            !user ? 
            

            <div>
              <Button>Sign up</Button> 
              <Link to={"/create-trip"}>
                <Button className="flex items-center justify-center gap-2 text-sm">Get Started </Button>
              </Link>
            </div>

        : <div>
            <DropdownMenu className="">
            <DropdownMenuTrigger className="focus:outline-none focus:ring-2 focus:ring-white ">
                  <Avatar>
                    <AvatarImage src={!user.picture ? "/icons/light/user-light.svg" : user.picture} />
                    {/* <AvatarFallback>{user.name.split(' ').map(word => word[0] + word[word.length - 1]).join('')}</AvatarFallback> */}
                  </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-5 mt-8 shadow-none">
              <DropdownMenuItem className="focus:outline-none focus:ring-2 focus:ring-white bg-transparent">
                <div>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuItem>
  

            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          }
        </div>


        <div className=" visible md:hidden lg:hidden xl:hidden">
          {
            !user ?

            <DropdownMenu className="">
            <DropdownMenuTrigger className="focus:outline-none focus:ring-2 focus:ring-white border border-black p-2 rounded-md">
              <CiMenuFries />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-5 mt-8 shadow-none">
              <DropdownMenuItem className="focus:outline-none focus:ring-2 focus:ring-white bg-transparent">
                <Button>Sign up</Button>
              </DropdownMenuItem>
  
              <DropdownMenuItem className="focus:outline-none focus:ring-2 focus:ring-white bg-transparent">
                <Link to={"/create-trip"}>
                  <Button className="flex items-center justify-center gap-2 text-sm">Get Started </Button>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          : <div>
            <DropdownMenu className="">
            <DropdownMenuTrigger className="focus:outline-none focus:ring-2 focus:ring-white border border-black p-2 rounded-md">
              <CiMenuFries />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-5 mt-8 shadow-none">
              <DropdownMenuItem className="focus:outline-none focus:ring-2 focus:ring-white bg-transparent">
                <div>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuItem>
  

            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          }
        </div>



    </div>
    </>
  )
}

export default Header
