import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BoldText } from '../shared';
import sanitizeHtml from 'sanitize-html';

const CommentContainer = styled.div``;

const CommentCaption = styled.span`
  margin-left: 15px;
  mark {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Comment({ author, payload }) {
  const cleanedPayload = sanitizeHtml(
    payload?.replace(/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/g, '<mark>$&</mark>'),
    { allowedTags: ['mark'] }
  );

  return (
    <CommentContainer>
      <BoldText>{author}</BoldText>
      <CommentCaption
        dangerouslySetInnerHTML={{
          __html: cleanedPayload,
        }}
      ></CommentCaption>
    </CommentContainer>
  );
}

Comment.protoTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};
