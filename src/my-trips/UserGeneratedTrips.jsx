import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useNavigation } from "react-router-dom";
import UserGeneratedTripsCardItem from "./components/UserGeneratedTripsCardItem";
const UserGeneratedTrips = () => {
  const navigation = useNavigation;
  const [userTrips, setUserTrips] = useState([])
  useEffect(()=> {
   getUserTrips();   
  },[])
  const getUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('userProfile'));
    if(!user){
      navigation('/')
      return;
    }
    setUserTrips([]);
    const q = query(collection(db, 'aiTrips'), where('userEmail', '==', user?.email))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      setUserTrips(preVal =>[...preVal, doc.data()])
    });
  }
  return (
    <div className="flex flex-col items-center justify-center mt-11 mb-20 ">
        <div className="md:w-2/3 w-11/12 flex flex-col items-start justify-start gap-3 text-wrap ">
          <div>
            <h1 className="md:text-3xl text-xl font-bold">My Trips ✈️</h1>
      
          </div>

          <div>
            {
              userTrips.map((trip, index) => {
                <div key={index}>
                  <UserGeneratedTripsCardItem trip={trip} />
                </div>
              })
            }
          </div>
        </div>
    </div>
  )
}

export default UserGeneratedTrips
