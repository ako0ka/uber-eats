import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("user", jsonValue);
  } catch (e) {
    alert("Errorsaving data");
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("user");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert("Error getting data");
  }
};
