import { Button } from "@/components/ui/button"
// import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoLogOutOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { googleLogout } from "@react-oauth/google";


const Header = () => {


  const user = JSON.parse(localStorage.getItem('userProfile'));
  const [openDialog, setOpenDialog] = useState(false);

  const navigation = useNavigate();


  useEffect(() =>{
    console.log(user)
  }, [])


  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      localStorage.setItem("user", JSON.stringify(codeResponse));
      setOpenDialog(false);
      
      toast.success("Successfully logged in! 🎉", {
        action: {
          label: <LiaTimesSolid className='text-xl'/>,
        }
      });
      getUserProfile(codeResponse);
      setInterval(() => {
        window.location.reload(true);
      }, 500)
    },
    onError: (error) => {
      console.error("Login Failed:", error);
      toast.error("Login failed. Please try again. 😕", {
          action: {
            label: <LiaTimesSolid className='text-xl'/>,
          }
        }
      );
    },
    flow: 'implicit' 
  });

  const getUserProfile = (tokenInfo) =>{
    axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenInfo?.access_token}`,
      {
        headers:{
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept:`application/json`
        }
      }
    ).then((response)=>{
      console.log(response)
      setOpenDialog(false);
      localStorage.setItem("userProfile",JSON.stringify(response?.data))
    }).catch((error)=>{
      console.log(error)
    })
  }


  return (
    <>
    <div className=" flex justify-between items-center p-2 px-4 shadow-sm sticky top-0 bg-gray-00 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 z-10">
        <Link to={'/'}>
        <img className="w-40" src="/tripster-main-logo.svg" alt="Tripster Logo" />
        </Link>
        <div className=" hidden md:visible lg:visible xl:visible w-fit md:flex justify-center items-center flex-row gap-2">
          
          {
            !user ? 
            
            <div className="flex justify-center items-center flex-row gap-2">
              <Button onClick={() => setOpenDialog(true)}>Sign in</Button>
              <Dialog open={openDialog} onOpenChange={() => setOpenDialog(false)}>
                <DialogContent>
                  <DialogHeader>

                    <DialogDescription>
                      <div className='flex flex-col items-start justify-center gap-3'>
                        <img src="/tripster-main-logo.svg" alt="Tripster.ai" className='w-40'/>
                        <p className='text-base font-medium'>Sign In Securely with Google</p>
                    
                        <Button 
                          onClick={login}
                        
                        className='w-full flex justify-center items-center gap-2 py-3 mt-2'>
                          <FcGoogle/>
                          Sign In with Google</Button>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Link to={"/create-trip"}>
                <Button className="flex items-center justify-center gap-2 text-sm">Get Started </Button>
              </Link>
            </div>

        : <div className="flex justify-center items-center flex-row gap-2">

          <div>
            <Link to={'/my-trips'}>
              <Button variant="outline" className="font-semibold rounded-full">My Trips</Button>
            </Link>
          </div>
            <DropdownMenu className="" trigger="hover" contentTrigger="click">
            <DropdownMenuTrigger className="focus:outline-none focus:ring-2 focus:ring-white hover:bg-gray-100">
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
                  <Button onClick={()=> {
                    googleLogout();
                    localStorage.clear();
                    navigation("/")
                  }} className="w-full flex justify-center items-center flex-row"><IoLogOutOutline className="mt-[3px]"/> Logout</Button>
              </DropdownMenuItem>
  

            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          }
        </div>



          {/* mobile ui */}
        <div className=" visible md:hidden lg:hidden xl:hidden">
          {
            !user ?

            <DropdownMenu className="">
            <DropdownMenuTrigger className="focus:outline-none focus:ring-2 focus:ring-white border border-black p-2 rounded-md">
              <CiMenuFries />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-5 mt-8 shadow-none">
              <DropdownMenuItem className="focus:outline-none focus:ring-2 focus:ring-white bg-transparent">
                <Button onClick={() => setOpenDialog(true)} className="w-full">Sign in</Button>
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
                <Link to={'/my-trips'}>
                  <Button variant="outline" className="font-semibold w-full rounded-full">My Trips</Button>
                </Link>
              </DropdownMenuItem>


              <DropdownMenuItem className="focus:outline-none focus:ring-2 focus:ring-white bg-transparent">
                  <Button
                  onClick={()=> {
                    googleLogout();
                    localStorage.clear();
                    navigation("/")
                  }}
                  className="w-full flex justify-center items-center flex-row"><IoLogOutOutline className="mt-[3px]"/> Logout</Button>
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
