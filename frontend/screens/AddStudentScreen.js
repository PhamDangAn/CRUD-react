import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createStudent } from '../services/api';

const AddStudentScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleAdd = async () => {
    if (!name) return;
    console.log("Thêm sinh viên:", name);
    try {
      const response = await createStudent(name);
      console.log("Phản hồi từ server:", response);
      navigation.goBack();
    } catch (error) {
      console.error("Lỗi khi thêm sinh viên:", error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text>Nhập tên sinh viên:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.buttonText}>Thêm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  addButton: { backgroundColor: 'blue', padding: 10, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
});

export default AddStudentScreen;
