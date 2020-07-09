import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';
import AppointmentCreated from '../Pages/AppointmentCreated';
import CreateAppointment from '../Pages/CreateAppointment';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
    initialRouteName="SignIn"
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} />
    <App.Screen name="CreateAppointment" component={CreateAppointment} />

    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;
