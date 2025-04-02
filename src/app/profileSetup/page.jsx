
// import React from "react";
import ProfileDetails from "./__components/ProfileDetails";
import ProfileInfoBar from "./__components/ProfileInfoBar";
import ProfileStatusBar from "./__components/ProfileStatusBar";



export default function profileSetup(){
    return(
     <div>
        <ProfileStatusBar/>
        <ProfileInfoBar/>
        <ProfileDetails/>
     </div>
    );
}