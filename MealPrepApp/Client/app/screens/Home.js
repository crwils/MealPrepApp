import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Image } from "react-native";


import colors from '../constants/colors';
import MealAppService from '../../services/MealAppService';

import { icons, images, SIZES, COLORS, FONTS } from '../constants';

const Home = () => {

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity //LOGO
                    style={{
                        width: 50, 
                        paddingLeft: SIZES.padding *2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.logo_icon}
                        resizeMode="contain"
                        style={{
                            width: 55,
                            height: 50
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <View //POSTCODE ENTRY FIELD
                            style={{
                                width: "75%",
                                height: "100%",
                                backgroundColor: COLORS.lightGray3,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: SIZES.radius
                            }}
                        >
                            <Text style={{ ...FONTS.h3, color: "grey"}}>Enter postcode...</Text>
                        </View>
                </View>

                <TouchableOpacity // SETTINGS COG ICON
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding *2,
                        justifyContent: 'center'
                    }}
                    >
                        <Image
                            source={icons.settings}
                            resizeMode="contain"
                            style={{
                                width: 35, 
                                height: 35,
                                right: 15,
                            }}
                        />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding *2,
                        backgroundColor: COLORS.grassgreen,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                >
                    <View
                        style={{
                            width: 50, 
                            height: 50, 
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.white
                        }}
                    >
                        <Image 
                            source={item.icon}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{padding: SIZES.padding *2}}>
                <Text style={{ ...FONTS.h1, fontWeight: "800" }}>ORDER NOW</Text>

                <FlatList
                    // data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => {item.id}}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding }}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: '#800',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    }
    
})

// function Home(props) {

//     const [items, setItems] = useState([]);
//     console.log(items);

//     useEffect(() => {
//         MealAppService.getFoodItem()
//             .then(items => setItems(items))
//     }, []);

//     const foodItems = items.map((item, key) => {
//         return (
//             <View style={styles.companyListContainer}>
//                 <View>
//                     <Image style={styles.image} source={{uri: item.imageUrl}}/>
//                     <Text> {item.name} </Text>
//                 </View>
//             </View>
//         )}) 
//         console.log(foodItems[0]);


//     return (
//         <View>
//             <View style={styles.background}>
//                 <View style={styles.header}/>
//                 <View style={styles.logoContainer}>
//                     <Image style={styles.logo} source={require("../assets/images/logo2.png")}/>
//                 </View>
//             </View>
//             <View>{foodItems}</View>
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     background: {
//         flex: 1, // sets the image background to entire screen
//         // justifyContent: "space-between",
//         alignItems: "center"
//     },
//     header: {
//         width: "100%", 
//         height: 135,
//         backgroundColor: colors.black,
//         alignItems: "flex-start", 
//     },
//     postcodeField: {
//         backgroundColor: colors.white,
//         width: "80%", 
//         height: 100,
//         borderRadius: 30
//     },
//     logoContainer: {
//         position: "absolute",
//         top: 20, 
//         flexDirection: "row"
//     },
//     logo: {
//         width: 480, 
//         height: 100,
//         alignItems: "center"
//     },
//     logoText: {
//         color: "white",
//         fontSize: 40
//     },
//     footer: {
//         width: "100%", 
//         height: 90,
//         backgroundColor: colors.grassgreen
//     },
//     companyListContainer: {
        
//     },
//     image: {
//         width: '90%', 
//         height: 250,
//     }

// });

export default Home;