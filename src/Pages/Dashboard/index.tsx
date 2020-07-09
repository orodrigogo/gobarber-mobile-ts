import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProvidersList,
} from './styles';

export interface IProvider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [providers, setProviders] = useState<IProvider[]>([]);

  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo,
          {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>

      <ProvidersList
        data={providers}
        keyExtractor={provider => provider.id}
        renderItem={({ item }) => <UserName>{item.name}</UserName>}
      />
      <Button title="Sair" onPress={signOut} />
    </Container>
  );
};

export default Dashboard;
