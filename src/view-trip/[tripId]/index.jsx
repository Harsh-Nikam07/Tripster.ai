import { db } from "@/service/firebaseConfig"
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { toast } from "sonner";


const ViewTrip = () => {

    const {tripId} = useParams();

    useEffect( () => {
       tripId && getTripDataFromDB()
    })
    const getTripDataFromDB = async () => {
         const docRef = doc(db, "aiTrips", tripId); 

         const docSnap = await getDoc(docRef);

         if(docSnap.exists()){
          console.log("document : ", docSnap.data())
         } else{
          console.log("no such data ")
          toast.error("no such data")
         }
    } 
  return (
    <div>
      trip ID = {tripId}
    </div>
  )
}

export default ViewTrip
