import { NavigationContainer } from "@react-navigation/native";
import React, { memo } from "react";
import Navigation from "./Src/Navigation/navigation";


const AppTwo  = ()=>{
    return(
        <NavigationContainer>
            <Navigation/>
        </NavigationContainer>
    )
}

export default memo(AppTwo)