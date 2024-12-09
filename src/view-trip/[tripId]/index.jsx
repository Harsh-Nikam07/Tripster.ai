import { db } from "@/service/firebaseConfig"
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";


const ViewTrip = () => {

    const {tripId} = useParams();

    const [trip, setTrip] = useState([])

    useEffect( () => {
       tripId && getTripDataFromDB()
    },[])
    const getTripDataFromDB = async () => {
         const docRef = doc(db, "aiTrips", tripId); 

         const docSnap = await getDoc(docRef);

         if(docSnap.exists()){
          console.log("document : ", docSnap.data());
          setTrip(docSnap.data());
         } else{
          console.log("no such data ")
          toast.error("no such data")
         }
    } 
  return (
    <div className="p-5 md:px-20 lg:px-44 xl:px-56 mt-5">


      {/* info section */}

      <InfoSection trip={trip}/>

     
      {/* Recommended hotels */}

      <Hotels trip={trip}/>
      {/* daily plan*/}
      {/* Footer*/}
    </div>
  )
}

export default ViewTrip
