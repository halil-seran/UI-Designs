import styled from "styled-components/native";

export const Screen = styled.View`
  flex: 1;
  align-items: center;
  background: #dee9fd;
`;

export const SafeArea = styled.SafeAreaView`
  align-self: stretch;
`;

export const View1 = styled.View`
  margin: 32px;
  margin-bottom: -32px;
  margin-top: 60px;
`;

export const View2 = styled.View``;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #91a1bd;
  font-weight: 800;
  font-size: 18px;
`;

export const SongImageArea = styled.View`
  margin-top: 32px;
  align-items: center;
`;

export const SongImage = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  border-color: #d7e1f3;
  border-width: 10px;
`;

export const SongArea = styled.View`
  align-items: center;
  margin-top: 32px;
`;

export const SongTitle = styled.Text`
  font-size: 30px;
  color: #6c7a93;
  font-weight: 600;
`;

export const SongArtistTitle = styled.Text`
  font-size: 14px;
  margin-top: 6px;
  color: #91a1bd;
  font-weight: 500;
`;

export const TrackArea = styled.View`
  margin-top: 32px;
  margin-bottom: 64px;
`;

export const TrackContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TimeText = styled.Text`
  font-size: 13px;
  color: #91a1bd;
  font-weight: 700;
  margin-left: 14px;
  margin-right: 15px;
`;

export const TrackControllers = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items:center;
`;
