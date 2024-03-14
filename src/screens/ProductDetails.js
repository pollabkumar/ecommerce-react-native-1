import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import Icon3 from 'react-native-vector-icons/dist/Fontisto';
import Icon4 from 'react-native-vector-icons/dist/Feather';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/CartSlice';

const ReadMore = ({ text, maxLength }) => {

    const [showMore, setShowMore] = useState(false);
    const [size, setSize] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <View style={{ marginTop: 8 }}>
            <Text style={{ color: "#808080", fontWeight: "400", textAlign: "justify", }}>
                {showMore ? text : `${text.slice(0, maxLength)}...`}
            </Text>
            {text.length > maxLength && (
                <TouchableOpacity onPress={toggleShowMore} style={{}}>
                    <Text style={{ color: '#000', fontSize: 13, fontWeight: "600" }}>
                        {showMore ? 'Show Less' : 'Read More'}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const ProductDetails = ({ navigation }) => {

    const longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci temporibus, obcaecati fugit est voluptas ut cupiditate recusandae! Quia tempore vitae eius consequatur. Maiores quasi est quibusdam expedita obcaecati tempore"
    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                animated={true}
                backgroundColor="#f6f6f6"
                barStyle="dark-content"
            />

            {/* header */}
            <View style={{ paddingTop: 6, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15, backgroundColor: "#f6f6f6" }}>
                <TouchableOpacity style={{ backgroundColor: "#fff", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1 }} onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-arrow-left" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={{ color: "#000", textTransform: "uppercase", fontWeight: "600", fontSize: 17 }}>Product details</Text>
                <TouchableOpacity style={{ backgroundColor: "#fff", padding: 8, borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1 }}>
                    <Icon2 name="heart-outline" size={15} color="#000" />
                </TouchableOpacity>
            </View>

            {/* Product details */}
            <ScrollView style={{ flex: 1 }}>

                {/* Product image */}
                <View style={{ backgroundColor: "#f6f6f6" }}>
                    <View style={{ width: "100%", alignItems: "center", }}>
                        <Image source={require("../assets/shirt.png")} style={{ borderRadius: 8, resizeMode: "contain", height: 400 }} />
                    </View>
                </View>

                {/* Details */}
                <View style={{ backgroundColor: "#fff", height: "100%", borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingVertical: 25, paddingHorizontal: 15 }}>

                    {/* star rating */}
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon3
                            name="star"
                            style={{
                                color: '#e27e45',
                                fontSize: 16,
                            }}
                        />
                        <Text style={{
                            color: "#000", marginLeft: 4, fontWeight: "500"
                        }}>5.0(124 reviews)</Text>
                    </View>

                    {/* Product title */}
                    <View style={{ marginTop: 5, flexDirection: "row", alignItems: 'flex-start', justifyContent: "space-between", }}>
                        <Text style={{ color: "#000", fontWeight: "700", fontSize: 19, width: "80%" }}>Air Jordan 1 Low Fragment X Travis Scoot</Text>
                        <TouchableOpacity style={{ backgroundColor: "#f6f6f6", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center", elevation: 1 }}>
                            <Icon2
                                name="share-social"
                                style={{
                                    color: '#000',
                                    fontSize: 18,
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Brand */}
                    <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
                        <Text style={{ color: "#948497", fontSize: 13, fontWeight: "500" }}>By</Text>
                        <Image source={require("../assets/nike_logo.png")} style={{ resizeMode: "contain", height: 28, width: 28, color: "#000", marginLeft: 3 }} />
                        <Text style={{ color: "#000", fontWeight: "600", fontSize: 13, }}>Nike Official</Text>
                        <View style={{ backgroundColor: "#3f87e7", borderRadius: 100, padding: 2, marginLeft: 5 }}>
                            <Icon4
                                name="check"
                                style={{
                                    color: '#fff',
                                    fontSize: 9,
                                    fontWeight: "600"
                                }}
                            />
                        </View>
                    </View>

                    {/* Description */}
                    <View style={{ marginTop: 15, }}>
                        <Text style={{
                            color: "#000",
                            fontWeight: "700",
                            fontSize: 16,
                            textTransform: "uppercase",
                        }}>Description :</Text>
                        <ReadMore text={longText} maxLength={200} />
                    </View>

                    {/* Size */}
                    <View style={{ marginTop: 20 }}>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                            <Text style={{
                                color: "#000",
                                fontWeight: "700",
                                fontSize: 16,
                            }}>
                                Size :
                            </Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: '#000', backgroundColor: "#f0f0f0", padding: 4, borderRadius: 3, elevation: 5, fontWeight: "500", fontSize: 14 }}>EU</Text>
                                <Text style={{ color: '#000', backgroundColor: "#f0f0f0", padding: 4, borderRadius: 3, elevation: 5, fontWeight: "500", marginLeft: 8, fontSize: 14 }}>US</Text>
                                <Text style={{ color: '#000', backgroundColor: "#f0f0f0", padding: 4, borderRadius: 3, elevation: 5, fontWeight: "500", marginLeft: 8, fontSize: 14 }}>UK</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
                            <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4, }}>40</Text>
                            <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4, }}>41</Text>
                            <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4, }}>42</Text>
                            <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4, }}>43</Text>
                            <Text style={{ backgroundColor: "#e79465", padding: 10, borderRadius: 8, color: "#fff", fontWeight: "600", margin: 4, }}>45</Text>
                            <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4, }}>46</Text>
                            <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4, }}>47</Text>
                            <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4, }}>40</Text>
                            <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4, }}>40</Text>
                            <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4, }}>40</Text>
                        </View>

                    </View>

                    <View style={{ paddingBottom: 55 }} />

                </View>

            </ScrollView>

            {/* Add to cart button */}
            <View style={{ position: "absolute", bottom: 15, width: "100%", paddingHorizontal: 10 }}>
                <View style={{}} />
                <View style={{ backgroundColor: "#212121", borderRadius: 100, paddingVertical: 7, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 7 }}>
                    <View style={{ marginLeft: 25 }}>
                        <Text style={{ color: "#959595", fontWeight: "500", fontSize: 15 }}>Price</Text>
                        <Text style={{ color: "#fff", fontSize: 22, fontWeight: "500" }}>₹2250</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: "#e27e45", paddingVertical: 12, borderRadius: 100, paddingHorizontal: 20, flexDirection: "row" }} >
                        <Icon2
                            name="cart"
                            style={{
                                color: '#fff',
                                fontSize: 20,
                                fontWeight: "600",
                                marginRight: 5,
                            }}
                        />
                        <Text style={{ color: "#000", textAlign: "center", color: "#fff", fontWeight: "600", fontSize: 17 }}>
                            Add to cart
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({})


























// import { useState } from 'react';
// import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// import Icon2 from 'react-native-vector-icons/dist/Ionicons';
// import Icon3 from 'react-native-vector-icons/dist/Fontisto';
// import Icon4 from 'react-native-vector-icons/dist/Feather';

// const ReadMore = ({ text, maxLength }) => {

//     const [showMore, setShowMore] = useState(false);
//     const [size, setSize] = useState(false);

//     const toggleShowMore = () => {
//         setShowMore(!showMore);
//     };

//     return (
//         <View style={{ marginTop: 8 }}>
//             <Text style={{ color: "#909090", fontWeight: "400", textAlign: "justify", }}>
//                 {showMore ? text : `${text.slice(0, maxLength)}...`}
//             </Text>
//             {text.length > maxLength && (
//                 <TouchableOpacity onPress={toggleShowMore} style={{}}>
//                     <Text style={{ color: '#000', fontSize: 12, fontWeight: "600" }}>
//                         {showMore ? 'Show Less' : 'Read More'}
//                     </Text>
//                 </TouchableOpacity>
//             )}
//         </View>
//     );
// };

// const ProductDetails = ({ navigation }) => {

//     const longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci temporibus, obcaecati fugit est voluptas ut cupiditate recusandae! Quia tempore vitae eius consequatur. Maiores quasi est quibusdam expedita obcaecati tempore"

//     return (
//         <View style={{flex:1}}>
//             <StatusBar
//                 animated={true}
//                 backgroundColor="#f6f6f6"
//                 barStyle="dark-content"
//             />

//             <View style={{ paddingTop: 4, backgroundColor: "#f6f6f6", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15 }}>
//                 <TouchableOpacity style={{ backgroundColor: "#fff", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center" }} onPress={() => navigation.goBack()}>
//                     <Icon name="keyboard-arrow-left" size={20} color="#000" />
//                 </TouchableOpacity>
//                 <Text style={{ color: "#000", textTransform: "uppercase", fontWeight: "600", fontSize: 17 }}>Product details</Text>
//                 <TouchableOpacity style={{ backgroundColor: "#fff", padding: 8, borderRadius: 100, alignItems: "center", justifyContent: "center" }}>
//                     <Icon2 name="heart-outline" size={15} color="#000" />
//                 </TouchableOpacity>
//             </View>

//              <ScrollView style={{flex:2}}>
//             <View style={{ backgroundColor: "#f6f6f6", }}>
//                 {/* Product image */}
//                 <View style={{ borderRadius: 15, width: '100%', height: "25%", justifyContent: "center", alignItems: "center", }}>
//                     <Image source={require("../assets/shirt.png")} style={{ borderRadius: 8, resizeMode: "contain", height: "100%" }} />
//                 </View>

//                 {/* Details */}
//                 <View style={{ backgroundColor: "#fff", height: "100%", borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingVertical: 25, paddingHorizontal: 15 }}>

//                     {/* star rating */}
//                     <View style={{ flexDirection: "row", alignItems: "center" }}>
//                         <Icon3
//                             name="star"
//                             style={{
//                                 color: '#e27e45',
//                                 fontSize: 16,
//                             }}
//                         />
//                         <Text style={{
//                             color: "#000", marginLeft: 4, fontWeight: "500"
//                         }}>5.0(124 reviews)</Text>
//                     </View>

//                     {/* Product title */}
//                     <View style={{ marginTop: 5, flexDirection: "row", alignItems: 'flex-start', justifyContent: "space-between", }}>
//                         <Text style={{ color: "#000", fontWeight: "700", fontSize: 19, width: "80%" }}>Air Jordan 1 Low Fragment X Travis Scoot</Text>
//                         <TouchableOpacity style={{ backgroundColor: "#f6f6f6", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center" }}>
//                             <Icon2
//                                 name="share-social"
//                                 style={{
//                                     color: '#000',
//                                     fontSize: 18,
//                                 }}
//                             />
//                         </TouchableOpacity>
//                     </View>

//                     {/* Brand */}
//                     <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
//                         <Text style={{ color: "#948497", fontSize: 13, fontWeight: "500" }}>By</Text>
//                         <Image source={require("../assets/nike_logo.png")} style={{ resizeMode: "contain", height: 28, width: 28, color: "#000", marginLeft: 3 }} />
//                         <Text style={{ color: "#000", fontWeight: "600", fontSize: 13, }}>Nike Official</Text>
//                         <View style={{ backgroundColor: "#3f87e7", borderRadius: 100, padding: 2, marginLeft: 5 }}>
//                             <Icon4
//                                 name="check"
//                                 style={{
//                                     color: '#fff',
//                                     fontSize: 9,
//                                     fontWeight: "600"
//                                 }}
//                             />
//                         </View>
//                     </View>

//                     {/* Description */}
//                     <View style={{ marginTop: 15, }}>
//                         <Text style={{
//                             color: "#000",
//                             fontWeight: "700",
//                             fontSize: 16,
//                             textTransform: "uppercase",
//                         }}>Description :</Text>
//                         <ReadMore text={longText} maxLength={50} />
//                     </View>

//                     {/* Size */}
//                     <View style={{ marginTop: 15 }}>

//                         <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
//                             <Text style={{
//                                 color: "#000",
//                                 fontWeight: "700",
//                                 fontSize: 16,
//                             }}>
//                                 Size :
//                             </Text>
//                             <View style={{ flexDirection: "row" }}>
//                                 <Text style={{ color: '#000', backgroundColor: "#dddddd", padding: 4, borderRadius: 3, elevation: 3, fontWeight: "500", fontSize: 14 }}>EU</Text>
//                                 <Text style={{ color: '#000', backgroundColor: "#dddddd", padding: 4, borderRadius: 3, elevation: 3, fontWeight: "500", marginLeft: 5, fontSize: 14 }}>US</Text>
//                                 <Text style={{ color: '#000', backgroundColor: "#dddddd", padding: 4, borderRadius: 3, elevation: 3, fontWeight: "500", marginLeft: 5, fontSize: 14 }}>UK</Text>
//                             </View>
//                         </View>
//                         <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 15 }}>
//                             <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4 }}>40</Text>
//                             <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4 }}>41</Text>
//                             <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4 }}>42</Text>
//                             <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4 }}>43</Text>
//                             <Text style={{ backgroundColor: "#e79465", padding: 10, borderRadius: 8, color: "#fff", fontWeight: "600", margin: 4 }}>45</Text>
//                             <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4 }}>46</Text>
//                             <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4 }}>47</Text>
//                             <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4 }}>40</Text>
//                             <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4 }}>40</Text>
//                             <Text style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 8, color: "#000", fontWeight: "600", margin: 4 }}>40</Text>
//                         </View>

//                     </View>

//                 </View>
//                 </View>
//             </ScrollView>
//             {/* Add to cart button */}
//             <View style={{ position: "absolute", bottom: 15, width: "100%", paddingHorizontal: 10 }}>
//                 <View style={{ backgroundColor: "#212121", borderRadius: 100, paddingVertical: 7, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 7 }}>
//                     <View style={{ marginLeft: 25 }}>
//                         <Text style={{ color: "#959595", fontWeight: "500", fontSize: 15 }}>Price</Text>
//                         <Text style={{ color: "#fff", fontSize: 22, fontWeight: "500" }}>₹2250</Text>
//                     </View>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", paddingVertical: 12, borderRadius: 100, paddingHorizontal: 20, flexDirection: "row" }}>
//                         <Icon2
//                             name="cart"
//                             style={{
//                                 color: '#fff',
//                                 fontSize: 20,
//                                 fontWeight: "600",
//                                 marginRight: 5,
//                             }}
//                         />
//                         <Text style={{ color: "#000", textAlign: "center", color: "#fff", fontWeight: "600", fontSize: 17 }}>
//                             Add to cart
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>

//         </View>
//     )
// }

// export default ProductDetails;

// const styles = StyleSheet.create({})