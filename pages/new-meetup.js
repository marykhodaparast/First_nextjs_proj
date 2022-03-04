// ourdomain.com/new-meetup
import NewMeetupForm from '../components/meetups/NewMeetupForm';
function NewwMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}
export default NewwMeetupPage;