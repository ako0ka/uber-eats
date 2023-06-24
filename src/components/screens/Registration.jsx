import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";

import * as ROUTES from "../constants/routes";

import Screen from "../atoms/Screen";
import Input from "../atoms/TextInput";
import Button from "../atoms/Button";
import { getData, storeData } from "../../helpers/manageStorage";
import AppSnackBar from "../moleculs/SnackBar";

const Container = styled(Screen)`
  flex: 1;
`;

const InnerContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegInput = styled(Input)`
  background-color: #ffffff;
  height: 40px;
  border-radius: 10px;
  width: 100%;
  font-size: 16px;
  padding-left: 10px;
`;

const Registration = ({ navigation }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (
      (form.name && form.email && form.password && form.confirmPassword) === ""
    ) {
      setError((prev) => !prev);
      return;
    }
    storeData("user", form);
    navigation.navigate(ROUTES.SIGN_IN_SCREEN);
    setSuccess((prev) => !prev);
  };
  return (
    <Container>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <AppSnackBar
          visible={success}
          text="You have been Registered"
          callback={setSuccess}
        />
        <AppSnackBar
          visible={error}
          text="Error while Registering"
          callback={setError}
          isError
        />

        <Text style={{ width: "100%", textAlign: "center", fontSize: 22 }}>
          Registration
        </Text>
        <InnerContainer>
          <RegInput
            placeholder="Full Name"
            value={form.name}
            onChangeText={(text) => setForm({ ...form, name: text })}
          />
          <RegInput
            placeholder="E-mail"
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          <RegInput
            placeholder="Password"
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
            secured
          />
          <RegInput
            placeholder="Re-Password"
            value={form.confirmPassword}
            onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
            secured
          />
          <Button title="register" onPress={handleSubmit} />
        </InnerContainer>
      </ScrollView>
    </Container>
  );
};

export default Registration;
