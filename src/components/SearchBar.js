import FeatherIcons from 'feather-icons-react';

import styled from 'styled-components';

const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 50%;
  background-color: ${({theme}) => theme.search.backgroundColor};
  color: ${({theme}) => theme.search.textColor};
  box-shadow: ${({theme}) => theme.search.boxShadow};
  padding: 12px 8px;
  border-radius: 50px;
  position: absolute;
  top: calc(50% - 40px);
  left: 50%;
  transform: translate(-50%, -50%);
  & > * {
    margin: 0 8px;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-family: "Raleway";
  color: ${({theme}) => theme.textColor};
  font-size: 16px;
  background: transparent;
  &::placeholder {
    color: ${({theme}) => theme.search.color};
  }
`;

function SearchBar({searchEngine, searchEngines}) {
  return (
    <SearchWrapper action={searchEngines[searchEngine]} autoComplete="off" >
      <FeatherIcons icon="search" />
      <Input placeholder="What do you like to know about?" name="q" autoComplete="off"/>
    </SearchWrapper>
  );
}

export default SearchBar;
