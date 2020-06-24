import React from 'react';

import { Button, GovFooter } from '../../components';
import Header from '../../components/Header/Header';
import Url from '../../components/Url';
import { Logo, Title, Paragraph } from './NotSupported.styled';
import { Container, Content, View } from '../../theme/grid';

const NotSupported = ({ date, url }) => {
  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <Logo />
          <Title>Wymagana aktualizacja</Title>
          <Paragraph>
            Nowa wersja aplikacji ProteGO Safe pozwala lepiej chronić Cię przed
            Koronawirusem. Od {date} wspierana jest tylko aplikacja w wersji 4.1
            - dalsze korzystanie z aplikacji wymaga aktualizacji. Po
            aktualizacji dotychczasowy dziennik zdrowia i wypełnione testy
            zostaną usunięte. Nie przejmuj się - wypełniaj je dalej w nowej,
            finalnej wersji aplikacji.
          </Paragraph>

          <Url value={url} underlineOff>
            <Button onClick={() => null} text="AKTUALIZUJ" type="primary" />
          </Url>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default NotSupported;
