import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
  mySkill: string;
}

export function SkillCard({ mySkill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{mySkill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1F1E25",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 10,
  },
  textSkill: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});
