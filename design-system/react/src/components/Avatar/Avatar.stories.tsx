import { Box } from '../Box';

import type { AvatarProps } from './Avatar';
import { Avatar } from './Avatar';

export default {
  component: Avatar,
  title: 'UI/Avatar',
  argTypes: {},
};

const AVATAR_SIZES = ['xsm', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

export const Sizes = (args: AvatarProps) => (
  <Box css={{ display: 'flex', alignItems: 'center', gap: '$3' }}>
    {AVATAR_SIZES.map((size) => (
      <Avatar
        {...args}
        size={size}
        key={size}
        name="Colm Tuite"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      />
    ))}
  </Box>
);

export const Fallback = (args: AvatarProps) => (
  <Box css={{ display: 'flex', alignItems: 'center', gap: '$3' }}>
    <Avatar
      {...args}
      name="Colm Tuite"
      src="https://images.unsplash.com/photo-1492633423870"
    />
  </Box>
);

export const Generated = (args: AvatarProps) => (
  <Box css={{ display: 'flex', alignItems: 'center', gap: '$3' }}>
    <Avatar.Generated
      {...args}
      hash="0x760a9e947de58fbf133a1d0ec97ae9aa18adfe71"
    />
  </Box>
);

export const GeneratedRandomBackground = (args: AvatarProps) => (
  <Box css={{ display: 'flex', alignItems: 'center', gap: '$3' }}>
    <Avatar.Generated
      {...args}
      hash="0x760a9e947de58fbf133a1d0ec97ae9aa18adfe71"
      background="random"
    />
  </Box>
);

export const GeneratedFuelBackground = (args: AvatarProps) => (
  <Box css={{ display: 'flex', alignItems: 'center', gap: '$3' }}>
    {AVATAR_SIZES.map((size) => (
      <Avatar.Generated
        {...args}
        hash="0x760a9e947de58fbf133a1d0ec97ae9aa18adfe71"
        background="fuel"
        key={size}
        size={size}
      />
    ))}
  </Box>
);

export const GeneratedFixedBackground = (args: AvatarProps) => (
  <Box css={{ display: 'flex', alignItems: 'center', gap: '$3' }}>
    <Avatar.Generated
      {...args}
      hash="0x760a9e947de58fbf133a1d0ec97ae9aa18adfe71"
      background="#6F2a43"
    />
  </Box>
);
