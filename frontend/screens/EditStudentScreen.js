import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { updateStudent } from '../services/api';

const EditStudentScreen = ({ navigation, route }) => {
  const { student, fetchStudents } = route.params;
  const [name, setName] = useState(student.name);

  const handleUpdate = async () => {
    if (!name) return;
    await updateStudent(student._id, name);
    fetchStudents();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Chỉnh sửa tên sinh viên:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Cập nhật</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  updateButton: { backgroundColor: 'orange', padding: 10, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
});

export default EditStudentScreen;
