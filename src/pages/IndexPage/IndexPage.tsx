import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';

import tonSvg from './ton.svg';
import gameSvg from './game.svg';

export const IndexPage: FC = () => {
  return (
    <List>
      <Section
        header='Actions'
      >
        <Link to='/game'>
          <Cell
            before={<Image src={gameSvg} style={{ backgroundColor: '#007AFF' }}/>}
            subtitle='Play hammer whack game'
          >
            Play game
          </Cell>
        </Link>
        <Link to='/ton-connect'>
          <Cell
            before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
            subtitle='Connect your TON wallet'
          >
            TON Connect
          </Cell>
        </Link>
      </Section>
    </List>
  );
};
