
import {Slot, useNavigation} from "expo-router"


import { StatusBar } from "expo-status-bar"


export default function Layout() { 

    const navigation = useNavigation()

    return (

        <>
        <StatusBar style="light" backgroundColor="black" translucent />
        
        <Slot/>
        </>
    )
}