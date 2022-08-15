import { gql, useQuery } from '@apollo/client';
import Avatar from '../components/Avatar';
import styled from 'styled-components';
import { BoldText } from '../components/shared';

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      comments
      createdAt
      isMine
    }
  }
`;

const PhotoContainer = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 20px;
`;

const PhotoHeader = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
`;

const Username = styled(BoldText)`
  margin-left: 5px;
`;

export default function Home() {
  const { data } = useQuery(FEED_QUERY);
  return (
    <div>
      {data?.seeFeed?.map((photo) => (
        <PhotoContainer key={photo.id}>
          <PhotoHeader>
            <Avatar url={photo.user.avatar} />
            <Username>{photo.user.username}</Username>
          </PhotoHeader>
        </PhotoContainer>
      ))}
    </div>
  );
}
