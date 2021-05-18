import FeatherIcons from 'feather-icons-react';

import styled from 'styled-components';
import {ThemeWrapper} from './commonStyles.js';

const SearchWrapper = styled(ThemeWrapper)`
  display: flex;
  align-items: center;
  width: 40%;
`;

const Input = styled.input`
  flex-grow: 1;
`;

function SearchBar() {
  return (
    <SearchWrapper>
      <FeatherIcons icon="search"/>
      <Input />
      <div> 
        hello
      </div> 
    </SearchWrapper>
  );
}

export default SearchBar;
