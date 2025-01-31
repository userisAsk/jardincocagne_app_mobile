import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/panier");
    } catch (error: any) {
      console.log(error);
      alert("Connexion échouée : " + error.message);
    }
  };

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/(tabs)");
    } catch (error: any) {
      console.log(error);
      alert("Inscription échouée : " + error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-3xl font-light mb-6">Jardin de Cocagne</Text>
      <StatusBar style="auto" />

      {/* Champ Email */}
      <TextInput
        className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Champ Mot de Passe */}
      <TextInput
        className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-4"
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Bouton Connexion */}
      <TouchableOpacity className="w-full h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-2" onPress={signIn}>
        <Text className="text-white font-semibold">Se connecter</Text>
      </TouchableOpacity>

      {/* Bouton Inscription */}
      <TouchableOpacity className="w-full h-12 bg-green-500 rounded-lg flex items-center justify-center" onPress={signUp}>
        <Text className="text-white font-semibold">S'inscrire</Text>
      </TouchableOpacity>

      {/* Lien vers le profil */}
      <Link href="/panier" className="text-blue-500 mt-4 text-lg">Aller au profil</Link>
    </SafeAreaView>
  );
}
