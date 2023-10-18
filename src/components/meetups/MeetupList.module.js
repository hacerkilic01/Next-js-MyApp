import classes from '.MeetupList.module.css';
function MeetupList(props){
    return <ul className={classes.List}>
        {props.meetups.map(meetup=> <MeetupItem key={meetup.id} id={meetup.id} />)}
    </ul>
}
export default MeetupList;