import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-6f1d7-default-rtdb.firebaseio.com/meetups.json',
      
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      {/* <NewMeetupForm onAddMeetup={addMeetupHandler} /> */}
      <NewMeetupForm onAddMeetup={addMeetupHandler} ></NewMeetupForm>
    </section>
  );
}

export default NewMeetupPage;
