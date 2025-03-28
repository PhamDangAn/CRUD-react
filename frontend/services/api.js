import axios from 'axios';

const API_URL = 'http://localhost:3000/Student';  // API URL

// Lấy danh sách sinh viên
export const fetchStudents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    return [];
  }
};

// Thêm sinh viên mới
export const createStudent = async (name) => {
  try {
    const response = await axios.post(API_URL, { name });
    return response.data;
  } catch (error) {
    console.error('Error adding student:', error);
  }
};

// Cập nhật sinh viên
export const updateStudent = async (id, name) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, { name });
    return response.data;
  } catch (error) {
    console.error('Error updating student:', error);
  }
};

// Xóa sinh viên
export const deleteStudent = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting student:', error);
  }
};
