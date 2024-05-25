import {Container, ContainersProfile, ContainerContent} from './style';
import {Header, PopUpMenu, theme} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackTypes} from '../../routes';
import {Alert, Text} from 'react-native';

export default function Profile() {
  const navigation = useNavigation<StackTypes>();
  const [popUpVisible, setPopUpVisible] = useState(false);

  return (
    <Container>
      <Header title="Perfil" />
      <ContainerContent>
        <ContainersProfile
          onPress={() =>
            Alert.alert('Sem Página', 'esta página ainda não foi criada')
          }>
          <Icon name="person-outline" size={25} color={theme.colors.primary} />
          <Text style={{paddingRight: 200}}>Editar perfil</Text>
          <Icon name="chevron-forward" size={25} color={theme.colors.primary} />
        </ContainersProfile>
        <ContainersProfile
          onPress={() =>
            Alert.alert('Sem Página', 'esta página ainda não foi criada')
          }>
          <Icon name="podium-outline" size={25} color={theme.colors.primary} />
          <Text style={{paddingRight: 205}}>Endereços</Text>
          <Icon name="chevron-forward" size={25} color={theme.colors.primary} />
        </ContainersProfile>
      </ContainerContent>
      <ContainerContent>
        <ContainersProfile onPress={() => navigation.navigate('Coupons')}>
          <Icon name="ticket-outline" size={25} color={theme.colors.primary} />
          <Text style={{paddingRight: 220}}>Cupons</Text>
          <Icon name="chevron-forward" size={25} color={theme.colors.primary} />
        </ContainersProfile>
        <ContainersProfile onPress={() => navigation.navigate('Favorites')}>
          <Icon name="heart-outline" size={25} color={theme.colors.primary} />
          <Text style={{paddingRight: 210}}>Favoritos</Text>
          <Icon name="chevron-forward" size={25} color={theme.colors.primary} />
        </ContainersProfile>
        <ContainersProfile onPress={() => navigation.navigate('Historic')}>
          <Icon
            name="list-circle-outline"
            size={25}
            color={theme.colors.primary}
          />
          <Text style={{paddingRight: 212}}>Histórico</Text>
          <Icon name="chevron-forward" size={25} color={theme.colors.primary} />
        </ContainersProfile>
        <ContainersProfile onPress={() => navigation.navigate('Notifications')}>
          <Icon
            name="notifications-outline"
            size={25}
            color={theme.colors.primary}
          />
          <Text style={{paddingRight: 190}}>Notificações</Text>
          <Icon name="chevron-forward" size={25} color={theme.colors.primary} />
        </ContainersProfile>
        <ContainersProfile onPress={() => navigation.navigate('Orders')}>
          <Icon
            name="file-tray-outline"
            size={25}
            color={theme.colors.primary}
          />
          <Text style={{paddingRight: 228}}>Orders</Text>
          <Icon name="chevron-forward" size={25} color={theme.colors.primary} />
        </ContainersProfile>
      </ContainerContent>
      <ContainerContent>
        <ContainersProfile
          onPress={() =>
            Alert.alert('Sem Página', 'esta página ainda não foi criada')
          }>
          <Icon name="card-outline" size={25} color={theme.colors.primary} />
          <Text style={{paddingRight: 190}}>Pagamentos</Text>
          <Icon name="chevron-forward" size={25} color={theme.colors.primary} />
        </ContainersProfile>
        <ContainersProfile
          onPress={() =>
            Alert.alert('Sem Página', 'esta página ainda não foi criada')
          }>
          <Icon
            name="chatbox-ellipses-outline"
            size={25}
            color={theme.colors.primary}
          />
          <Text style={{paddingRight: 230}}>Ajuda</Text>
          <Icon name="chevron-forward" size={25} color={theme.colors.primary} />
        </ContainersProfile>
      </ContainerContent>
      <ContainerContent>
        <ContainersProfile
          onPress={() =>
            Alert.alert('Sem Página', 'esta página ainda não foi criada')
          }>
          <Icon
            name="information-circle-outline"
            size={25}
            color={theme.colors.primary}
          />
          <Text style={{paddingRight: 235}}>Sobre</Text>
          <Icon name="chevron-forward" size={25} color={theme.colors.primary} />
        </ContainersProfile>
      </ContainerContent>

      <PopUpMenu
        closePopUp={() => setPopUpVisible(false)}
        visible={popUpVisible}
        title="Menu"
        text="Opções"
      />
      <Icon
        name="add-circle-outline"
        size={25}
        color={theme.colors.primary}
        onPress={() => setPopUpVisible(true)}
      />
    </Container>
  );
}
