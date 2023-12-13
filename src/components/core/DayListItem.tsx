import { Text, StyleSheet, View, Pressable } from "react-native";
import { Link } from "expo-router";

type DayListItem = {
  day: number;
}

export default function DayListItem({ day }: DayListItem) {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>

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