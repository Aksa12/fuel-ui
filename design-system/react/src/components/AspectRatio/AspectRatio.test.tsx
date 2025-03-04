import { testA11y } from '@fuel-ui/test-utils';

import { Image } from '../Image';

import { AspectRatio } from './AspectRatio';

describe('AspectRatio', () => {
  it('a11y', async () => {
    await testA11y(
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photo by Tobias Tullius"
        />
      </AspectRatio>
    );
  });
});
