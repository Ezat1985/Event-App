import { useState } from "react"

const AddEvent = ({handelAddEvent}) => {

    const [eventtext, setEventText]= useState('')
    const characterlimit = 200;
    const handelchange= (event)=>{
        if (characterlimit-event.target.value.length>=0){
            setEventText(event.target.value);
        }
       
    }
    const handelsaveclick = ()=> {
        if (eventtext.trim().length>0){
            handelAddEvent(eventtext)
            setEventText('');
        }
        

    }
    return (
        <div className="event new">
<textarea rows='8' cols='10' placeholder="Type to add Event" value={eventtext} onChange={handelchange} >

</textarea>
<div className="event-footer">
    <small>{characterlimit-eventtext.length} Remaining</small>
    <button className="save" onClick={handelsaveclick}>Save</button>

</div>
        </div>
    )
}

export default AddEvent
