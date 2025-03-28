import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AddStudentScreen from '../screens/AddStudentScreen';
import EditStudentScreen from '../screens/EditStudentScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Danh sách sinh viên' }} />
        <Stack.Screen name="AddStudent" component={AddStudentScreen} options={{ title: 'Thêm sinh viên' }} />
        <Stack.Screen name="EditStudent" component={EditStudentScreen} options={{ title: 'Sửa sinh viên' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
