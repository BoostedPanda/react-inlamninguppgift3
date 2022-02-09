import React from 'react';
import { Space, Blockquote} from "@mantine/core"
import { CommentDiscussionIcon } from '@primer/octicons-react'

const Comment = ({ comment }) => {
  return (
    <Blockquote cite={`- ${comment.name} / ${comment.email}`} icon={<CommentDiscussionIcon size={28} />}>
      <Space h="xs"/>
      {comment.body}
    </Blockquote>
  );
}

export default Comment;
