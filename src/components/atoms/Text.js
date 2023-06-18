import React from "react";
import styled from "styled-components";

const StyledTxt = styled.Text`
  font-family: ${({ type }) => {
    switch (type) {
      case "Bold":
        return "Uber-Bold";
      case "Medium":
        return "Uber-Medium";
    }
  }};
  font-size: ${({ size }) => (size ? size : 14)}px;
  /* color: ${{}} */
`;

const Text = ({ children, type = "Bold", size, ...otherProps }) => (
  <StyledTxt type={type} size={size} {...otherProps}>
    {children}
  </StyledTxt>
);

export default Text;
