import useState from 'react';
import MeetupList from "../components/meetups/MeetupList";

 function AllMeetupsPage() {

  // durum yönetimini kullanarak ve bir API'den veri çekerek bir web sayfasını dinamik olarak oluşturma

const [isLoading, setIsLoading]= useState(true);
//  isLoading verilerin yüklenip yüklenmediğini kontrol eder
const[loadedMeetups, setLoadedMeetups]=useState([]);
// API'den gelen verileri tutar

 fetch('https://react-getting-started-6f1d7-default-rtdb.firebaseio.com/meetups.json').then(response=>{
  return response.json();
}).then(data => {
  setIsLoading(false);
  setLoadedMeetups(data);

});
if(isLoading){
  return(
    <section>
      <p>Loading...</p>
    </section>
  );
}

// fetch fonksiyonu ile belirtilen URL'den veri çekilir
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
