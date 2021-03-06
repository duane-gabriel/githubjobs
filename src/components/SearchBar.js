import React from 'react';
import styled from 'styled-components';

import imagebg from 'assets/images/backgroundImg.png';
import colors from 'style/colors';
import { icons } from 'constants/index';

export default function SearchBar({ value, onChange, search }) {
  return (
    <SearchWrapper>
      <BunttonGroup>
        <SearchInput
          placeholder='Título, empresas, nível, benefícios'
          value={value}
          onChange={({ target }) => onChange(target.value)}
        />
        <SearchButton onClick={search}>Buscar</SearchButton>
      </BunttonGroup>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.section`
  height: 150px;
  max-width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: url(${imagebg}) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  @media(max-width:380){
    max-width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 20px;
  background: url(${icons.suitcase}) no-repeat no-repeat 15px center;
  padding-left: 50px;
  background-size: 25px;
  color: ${colors.gray};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.gray};
  }
  :-ms-input-placeholder {
    color: ${colors.gray};
  }

  @media (max-width: 500px) {
    width: unset;
    max-width: 100%;
  }
`;

const SearchButton = styled.button`
  color: white;
  background: #1e86ff;
  border: none;
  outline: none;
  padding: 15px 40px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #00418e, 0 0 0 4px #1e86ff;
  }
  @media(max-width:380px){
    padding: 10px;
  }
`;

const BunttonGroup = styled.div`
  width: auto;
  border-radius: 10px;
  background: white;
  display: flex;
  justify-content: space-between;
  display: flex;
  flex: 1;
  margin: 0 10rem;
  align-items: center;
`;
