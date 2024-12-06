import { db } from "@/service/firebaseConfig"
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";


const ViewTrip = () => {

    const {tripId} = useParams();

    const [trip, setTrip] = useState([])

    useEffect( () => {
       tripId && getTripDataFromDB()
    })
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
    <div>
      trip ID = {tripId}


      {/* info section */}

      <InfoSection trip={trip}/>

     
      {/* Recommended hotels */}
      {/* daily plan*/}
      {/* Footer*/}
    </div>
  )
}

export default ViewTrip
