import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { SelectBudgetOptions, SelectTravelesList, AI_PROMPT } from '@/constants/options';
import { Button } from '@/components/ui/button';
import { FaQuestion } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog"

import { chatSession } from '@/service/AiModel';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from "firebase/firestore";
import { db } from '@/service/firebaseConfig';

const CreateTrip = () => {
  const [place, setPlace] = useState();

  const [formData, setFormData] = useState([]);

  const [openDialog, setOpenDialog] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleInputChange = (name, value) =>{

    if(name == "noOfDays"){
      if(value > 8) {
        value = 8;
        // alert("Maximum 8 days allowed!");
      }
    }
    setFormData({
      ...formData,
      [name]:value
    })
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

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
      getUserProfile(codeResponse)
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



  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");
  
    if(!user){
      setOpenDialog(true);
      return;
    }
  
    if (!formData?.location?.label || !formData?.noOfDays || !formData?.People || !formData?.Budget) {
      toast.error("Please fill all the fields ✍️", {
        action: {
          label: <LiaTimesSolid className='text-xl'/>,
        }
      });
      return;
    }
  
    try {
      setLoading(true);
  
      const finalPrompt = AI_PROMPT.replace("{location}", formData.location.label)
        .replace("{totalDays}", formData.noOfDays)
        .replace("{traveler}", formData.People)
        .replace("{budget}", formData.Budget)
        .replace("{totalDays}", formData.noOfDays);
      console.log(finalPrompt)
      const result = await chatSession.sendMessage(finalPrompt);
      const tripText = result.response.text();
      await saveTripData(tripText);
      
      toast.success("Trip generated successfully! 🎉", {
        action: {
          label: <LiaTimesSolid className='text-xl'/>,
        }
      });

      console.log(tripText)
    } catch (error) {
      console.error("Error generating trip:", error);
      toast.error("Failed to generate trip. Please try again.", {
        action: {
          label: <LiaTimesSolid className='text-xl'/>,
        }
      });
    } finally {
      setLoading(false);
    }
  }


  // Save trip data to firebase

  const saveTripData = async (tripData) => {
    try {
      const user = JSON.parse(localStorage.getItem("userProfile"));
      if (!user?.email) {
        throw new Error("User email not found");
      }
  
      const docID = Date.now().toString();
      const tripDoc = {
        userSelection: formData,
        tripData: tripData,
        userEmail: user.email,
        id: docID,
        createdAt: new Date().toISOString()
      };
  
      await setDoc(doc(db, "aiTrips", docID), tripDoc);
      console.log("Trip saved successfully!");
    } catch (error) {
      console.error("Error saving trip:", error);
      toast.error("Failed to save trip data. Please try again.", {
        action: {
          label: <LiaTimesSolid className='text-xl'/>,
        }
      });
      throw error; // Re-throw to be caught by the calling function
    }
  }


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
      onGenerateTrip();
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-11 mb-11 ">
        <div className="md:w-2/3 w-11/12 flex flex-col items-start justify-start gap-3 text-wrap ">
          <div>
          <h1 className="md:text-3xl text-xl font-bold">Tell us your Travel Preferences 🏕️🌴</h1>
            <p className="md:text-lg text-sm text-justify text-gray-500 md:p-0 pt-2">Just provide some basic information, and Tripster.ai will create a personalized itinerary based on your preferences</p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-1  ">
            <h2 className="md:text-xl text-lg font-medium my-3">What`s your destination?</h2>
            <div className='w-full'>
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              className='w-full'
              selectProps={{
                place,
                onChange:(v) => {setPlace(v);
                  handleInputChange("location", v)
                }
              }}
            />
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-1  ">
            <h2 className="md:text-xl text-lg font-medium my-3">How many days are you planning for?</h2>
            <div className='w-full'>
              <div className="flex flex-col gap-1 w-full">
                <Input 
                  placeholder='Ex. 5' 
                  type='number' 
                  min={1} 
                  maxLength={2}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value > 8) {
                      e.target.value = '';
                      handleInputChange("noOfDays", ''); 
                      console.log("user has entered and value beyond the range")
                    } else {
                      handleInputChange("noOfDays", value)
                    }
                  }}
                />
                {formData?.noOfDays == "" && (
                  <p className="text-red-500 text-sm">Please enter a value between 1-8 days</p>
                )}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-start justify-start gap-1  ">
            <h2 className="md:text-xl text-lg font-medium my-3">What is Your Budget?</h2>

              <div className='w-full grid md:grid-cols-3 grid-cols-2 gap-5'>
                {
                SelectBudgetOptions.map((item, index)=>(
                  <div key={index} onClick={()=> handleInputChange("Budget", item.title)} 
                  className={
                    ` cursor-pointer p-3 w-full border flex justify-start items-start flex-col rounded-lg hover:bg-purple-100 transition-all 
                    ${formData?.Budget==item.title&&`bg-purple-50 border border-purple-500`}`
                  }>
                    <div className='w-full flex justify-between items-center'>
                    <h2 className='text-4xl'>{item.icon}</h2>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            variant="ghost" 
                            className='w-8 h-8 bg-purple-200 p-1 rounded-full hover:bg-purple-400'
                            onClick={(e) => e.preventDefault()}
                          >
                            <FaQuestion className='text-purple-900 text-sm'/>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent 
                          side="bottom" 
                          sideOffset={5}
                          className="max-w-[200px] text-sm break-words"
                        >
                          <p>{item.estimatedBudget}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    </div>
                    <h2 className='font-bold text-lg mt-1'>{item.title}</h2>
                    <p className='font-light text-sm text-gray-500'>{item.desc}</p>
                  </div>
                ))
                }
              </div>
             
          </div>

          <div className="w-full flex flex-col items-start justify-start gap-1  ">
            <h2 className="md:text-xl text-lg font-medium my-3">Who do you plan on traveling with on your next adventure?</h2>

              <div className='w-full grid md:grid-cols-3 grid-cols-2 gap-5'>
                {
                SelectTravelesList.map((item, index)=>(
                  <div key={index} onClick={()=> handleInputChange("People", item.people)}
                  className={
                    `cursor-pointer p-3 w-full border flex justify-start items-start flex-col rounded-lg hover:bg-purple-100 transition-all 
                    ${formData?.People==item.people&&`bg-purple-50 border border-purple-500`}`
                  }>
                  <div className='w-full flex justify-between items-center'>
                    <h2 className='text-4xl'>{item.icon}</h2>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                        <Button 
                            variant="ghost" 
                            className='w-8 h-8 bg-purple-200 p-1 rounded-full hover:bg-purple-400'
                            onClick={(e) => e.preventDefault()}
                          >
                            <FaQuestion className='text-purple-900 text-sm'/>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent 
                          side="bottom" 
                          sideOffset={5}
                          className="max-w-[200px] text-sm break-words"
                        >
                          <p>{item.toolTipText}</p>
                          <p>{item.estimatedBudget}</p>

                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    </div>
                    <h2 className='font-bold text-lg mt-3'>{item.title}</h2>
                    <p className='font-light text-sm text-gray-500'>{item.desc}</p>
                  </div>
                ))
                }
              </div>
             
          </div>

          <div className=' w-full flex justify-end'>
            <Button onClick={onGenerateTrip}
              disabled={loading}
            >
              {
                loading ? <AiOutlineLoading3Quarters className='animate-spin'/> : "Generate Trip"
              }
              
              </Button>
          </div>

          <Dialog open={openDialog} onOpenChange={() => setOpenDialog(false)}>
            {/* <DialogTrigger>Open</DialogTrigger> */}
            <DialogContent>
              <DialogHeader>
                {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
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


        </div>

      </div>
    </>
  )
}

export default CreateTrip
