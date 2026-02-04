import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {subDays, format} from 'date-fns';


const ConsistencyGraph = () =>{
    const days = Array(140).fill(null);
    // how database is going to return the data
    // testing purpose
    const activeDays = [
    "2026-02-03",
    "2026-02-01",
    "2026-01-30",
    "2026-01-25",
    "2026-01-22",
    "2026-01-14",
    "2026-01-08",
    "2026-01-02",
    "2025-12-29",
    "2025-12-24",
    "2025-12-18",
    "2025-12-15",
    "2025-12-09",
    "2025-12-05",
    "2025-11-30",
    "2025-11-22",
    "2025-11-17",
    "2025-11-11",
    "2025-11-04",
    "2025-10-29",
    "2025-10-21",
    "2025-10-15",
    "2025-10-08",
    "2025-10-01",
    "2025-09-25",
    "2025-09-18"
];
    let currDate = new Date();
                        

    return(
        <View style = {styles.container}>
            <View style = {styles.grid}>
                {
                    // creating the grid
                    days.map((_, index) =>{

                        // get the date 100 days before and start from 100 days ago

                        const result = subDays(new Date(), 140 - index - 1);
                        // format the result in the way we want it
                        const formattedResult = format(result, 'yyyy-MM-dd')
                        // testing console.log(formattedResult)
                        const isActive = activeDays.includes(formattedResult);

                        return(
                            // changing the box color based on weather we were active that day or not
                            <View key={index}  style = {[styles.boxes, isActive? styles.activeBox: null]}></View>
                        );
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '85%',
        maxWidth: '85%',
        backgroundColor: 'rgb(52, 52, 52)',
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
    },
    grid:{
        height: 108,
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: 4,
        justifyContent: 'center',
    },
    boxes:{
        height: 12,
        width: 12,
        backgroundColor: 'gray',
        borderRadius: 2,
    },
    activeBox:{
        backgroundColor: '#4ade80',
    }
    
});


export default ConsistencyGraph;