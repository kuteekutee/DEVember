import { Text, StyleSheet, View } from "react-native";

type DayListItem = {
  day: number;
}

export default function DayListItem({ day }: DayListItem) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  box: {
    backgroundColor: '#f9ede3',
    // width: 100,
    // height: 100,
    aspectRatio: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#39B4521',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
  },
  text: {
    color: '#9B4521',
    fontSize: 75,
    fontFamily: 'AmaticBold'
  }
});