import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchStudents, deleteStudent } from '../services/api';

const HomeScreen = ({ navigation }) => {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    const data = await fetchStudents();
    setStudents(data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents(); // Cập nhật danh sách sau khi xóa
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.studentItem}>
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditStudent', { student: item, fetchStudents: loadStudents })}>
              <Text style={styles.editButton}>Sửa</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item._id)}>
              <Text style={styles.deleteButton}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('AddStudent')} style={styles.addButton}>
        <Text style={styles.buttonText}>Thêm Sinh Viên</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  studentItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  editButton: { color: 'blue', marginLeft: 10 },
  deleteButton: { color: 'red', marginLeft: 10 },
  addButton: { backgroundColor: 'green', padding: 10, alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontWeight: 'bold' },
});

export default HomeScreen;
