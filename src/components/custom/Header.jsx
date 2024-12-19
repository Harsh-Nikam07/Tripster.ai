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
import { IoLogOutOutline } from "react-icons/io5";


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
                    {/* <AvatarImage src={!user.picture ? "/icons/light/user-light.svg" : user.picture} /> */}
                    <AvatarImage src={!user.picture ? "https://github.com/shadcn.png" : user.picture} />
                    <AvatarFallback>{user.name.split(' ')[0][0] + user.name.split(' ')[1][0]}</AvatarFallback>
                  </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-5 mt-8 shadow-none">
              <DropdownMenuItem className="focus:outline-none focus:ring-2 focus:ring-white bg-transparent">
                <div className=" w-full flex justify-start items-start flex-col">
                <div className="flex justify-start items-start flex-row gap-2">


                  <div>
                    <span className="font-semibold">{user.name}</span>

                  </div>


                </div>

                <div>
                  <span className="text-xs"> {user.email}</span>
                </div>
                </div>
              </DropdownMenuItem>


              <DropdownMenuItem className="focus:outline-none focus:ring-2 focus:ring-white bg-transparent">
                  <Button className="w-full flex justify-center items-center flex-row"><IoLogOutOutline className="mt-[3px]"/> Logout</Button>
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
                  <AvatarImage src={!user.picture ? "https://github.com/shadcn.png" : user.picture} />
                  <AvatarFallback>{user.name.split(' ')[0][0] + user.name.split(' ')[1][0]}</AvatarFallback>
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
