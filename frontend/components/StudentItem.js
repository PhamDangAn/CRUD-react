import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StudentItem = ({ student, onEdit, onDelete }) => {
  return (
    <View style={styles.row}>
      <Text>{student.id} - {student.name}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.editButton} onPress={() => onEdit(student)}>
          <Text style={styles.buttonText}>Sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(student.id)}>
          <Text style={styles.buttonText}>Xoá</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 },
  actions: { flexDirection: 'row' },
  editButton: { backgroundColor: 'blue', padding: 5, marginRight: 5 },
  deleteButton: { backgroundColor: 'red', padding: 5 },
  buttonText: { color: 'white' },
});

export default StudentItem;
