import React from 'react';
import { Card, Container, Title, Breadcrumbs, Anchor, Alert, Space } from "@mantine/core"
import { XCircleFillIcon } from '@primer/octicons-react'

const NotFound = () => {

    const items = [
        { title: 'Home', href: '/' },
        { title: `404`, href: '#' },
      ].map((item, index) => (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ));
  return (
  <div>
      <Container>
      <Card shadow="md" padding="xl">
      <Breadcrumbs separator="→">{items}</Breadcrumbs>
        <Title align="center" order={1}>404 not found</Title>
        <Space h="sm"></Space>
        <Alert icon={<XCircleFillIcon size={16} />} title="Bummer!" color="red">
                Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
              </Alert>
      </Card>
      </Container>
  </div>
  )
}

export default NotFound;
