import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import PlacesInput from "react-native-places-input";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/Search/searchSlice";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const searches = useSelector((state) => state.search);
  const [dataResp, setDataResp] = useState("");

  return (
    <View>
      <Text style={styles.titleUp}>Type your location here:</Text>
      <PlacesInput
        googleApiKey="AIzaSyA7ZP2cCn9A9uAEmePl8JdxqvaNuhbc15s"
        placeHolder={"Search"}
        language={"pt-Br"}
        queryCountries={["br"]}
        queryTypes="(cities)"
        onSelect={(place) => {
          dispatch(
            add({
              name: place.result.formatted_address.split(",")[0],
              state: place.result.formatted_address.split(",")[1],
              country: "Brazil",
              lat: place.result.geometry.location.lat,
              lng: place.result.geometry.location.lng,
            })
          );
          setDataResp(place.result.geometry.location);
        }}
        stylesContainer={{
          marginTop: 50,
          shadowOpacity: 0,
          backgroundColor: "white",
          elevation: 0,
        }}
        stylesInput={{
          borderWidth: 1,
          borderColor: "#dbdbdb",
          borderRadius: 15,
        }}
      />

      <View style={styles.buttonsRowView}>
        <TouchableOpacity
          title=""
          style={styles.buttonStyle}
          onPress={() => {
            if (dataResp) {
              navigation.navigate("App", {
                data: dataResp,
                loadLocation: "false",
              });
            } else {
                alert('insira')
            }
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title=""
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate("App", { loadLocation: "true" });
          }}
        >
          <MaterialIcons name="gps-fixed" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.previousText}>Previous Searches</Text>
      {searches &&
        searches.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.cardContainer}
              onPress={() => {
                navigation.navigate("App", {
                  data: { lat: item.lat, lng: item.lng },
                  loadLocation: "false",
                });
              }}
            >
              <View style={styles.viewColumn} />
              <View style={styles.viewTextCard}>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginLeft: 3 }}
                >
                  {item.name}
                </Text>
                <Text>{item.state + ", " + item.country}</Text>
              </View>
              <View
                style={{
                  width: "15%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="arrowright" size={26} color="#ff6961" />
              </View>
            </TouchableOpacity>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  titleUp: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 85,
  },
  buttonStyle: {
    width: 150,
    height: 70,
    backgroundColor: "#ff6961",
    borderRadius: 15,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsRowView: {
    flexDirection: "row",
    marginHorizontal: "2%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  previousText: {
    fontSize: 24,
    marginLeft: "2%",
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardContainer: {
    width: "96%",
    marginLeft: "2%",
    height: 90,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 15,
  },
  viewColumn: {
    width: 3,
    height: 50,
    backgroundColor: "#ff6961",
    position: "absolute",
    left: 20,
    top: 25,
  },
  viewTextCard: {
    width: "85%",
    height: "100%",
    justifyContent: "center",
    paddingLeft: 30,
  },
});
