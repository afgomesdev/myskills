import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  StatusBar,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills((prevSkills) => [...prevSkills, data]);
  }

  function handleRemoveNewSkill(id: string) {
    setMySkills((prevSkills) => prevSkills.filter((skill) => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good morning");
    } else {
      setGreeting("Good night");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, André</Text>
      <Text style={styles.greeting}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button title="Add" onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillCard onPress={() => handleRemoveNewSkill(item.id)} mySkill={item.name} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1E25",
    color: "#FFF",
    fontSize: Platform.OS === "ios" ? 15 : 12,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  greeting: {
    color: "#FFF",
  },
});
