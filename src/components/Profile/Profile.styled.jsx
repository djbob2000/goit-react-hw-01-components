import styled from 'styled-components';

export const ProfileDiv = styled.div`
  background-color: ${p => p.theme.colors.background};
  width: 275px;
  box-shadow: 0 0 6px 0 #adacac;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${p => p.theme.radii.sm};
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 32px;
  background-color: ${p => p.theme.colors.background};

  img {
    width: 100%;
    border-radius: ${p => p.theme.radii.round};
  }
`;

export const Name = styled.p`
margin: 0;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Tag = styled.p`
margin: 0;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};
`;
export const Location = styled.p`
margin: 0;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: ${p => p.theme.colors.backgroundSecondary};
  border-top: ${p => p.theme.borders.normal};
`;

export const ProfileStatsBlock = styled.li`
padding: 18px 5px;
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  align-items: center;

  & + & {
    border-left: ${p => p.theme.borders.normal};
  }
`;

export const Info = styled.span`
font-weight: ${p =>
  typeof p.children === 'number'
    ? p.theme.fontWeights.bold
    : p.theme.fontWeights.normal};
  color: ${p =>
    typeof p.children === 'number'
      ? p.theme.colors.black
      : p.theme.colors.text};
`;
