import React from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Logon into GoBarber</Title>
            </View>
            <Input name="email" icon="mail" placeholder="Email" />
            <Input
              name="password"
              icon="lock"
              placeholder="Password"
              secureTextEntry
            />

            <Button
              onPress={() => {
                console.log('iauza');
              }}
            >
              Login
            </Button>
            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>I forgot my password</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Create account</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
