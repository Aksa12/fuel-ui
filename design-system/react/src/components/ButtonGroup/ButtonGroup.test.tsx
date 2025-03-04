import { testA11y } from '@fuel-ui/test-utils';

import { Button } from '../Button';

import { ButtonGroup } from './ButtonGroup';

describe('ButtonGroup', () => {
  it('a11y', async () => {
    await testA11y(
      <ButtonGroup>
        <Button>First</Button>
        <Button leftIcon="Calendar">Second</Button>
        <Button>Third</Button>
      </ButtonGroup>
    );
  });
});
