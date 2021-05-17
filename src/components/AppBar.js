import styled from 'styled-components';

const AppBarRoot = styled.div`
display: flex;
place-items: center;
background-color: #fcfcfc;
height: 80px;
justify-content: flex-end;
`;

const Check = styled.label`
color: #3e4752;
`;

function AppBar() {
  return (
    <AppBarRoot>
      <Check>
        <input type="checkbox" />
        Show Tasks
      </Check>
      <Check>
        <input type="checkbox" />
        Dark Mode
      </Check>
    </AppBarRoot>
  );
}

export default AppBar;
