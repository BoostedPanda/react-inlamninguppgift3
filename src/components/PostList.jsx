import React from 'react';
import { Table } from '@mantine/core';
import Posts from './Posts';
import { Container, Pagination, Center, Space } from '@mantine/core';
import { useState } from 'react';

const MAX_PER_PAGE = 10

const paginate = (arr, pSize, pNum) => {
  return arr.slice((pNum - 1) * pSize, pNum * pSize)
}

const PostList = ({ posts }) => {
  const [activePage, setPage] = useState(1)

  return (
    <Container size="md" padding="sm">
      <Table horizontalSpacing="sm" verticalSpacing="sm" striped highlightOnHover>
        <thead>
          <tr>
            <th>Post number</th>
            <th>Post title</th>
          </tr>
        </thead>
        <tbody>{ paginate(posts, MAX_PER_PAGE, activePage).map((post,i) => <Posts key={i} post={post} />)}</tbody>
      </Table>
      <Space h={10} />
      <Center>
        <Pagination total={Math.round(posts.length / MAX_PER_PAGE)} page={activePage} onChange={setPage}  />
      </Center>
    </Container>
  );
}

export default PostList;
