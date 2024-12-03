import { doc } from "firebase/firestore";
import { useParams } from "react-router-dom"


const ViewTrip = () => {

    const {tripId} = useParams();

    const getTripDataFromDB = async () => {
         const docRef = doc(db, "AITrips", tripId)

         const docSnap = await getDoc(docRef)
    } 
  return (
    <div>
      trip ID = {tripId}
    </div>
  )
}

export default ViewTrip
