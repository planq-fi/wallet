import { Box, Icon } from '@components';
import { COLORS, SPACING } from '@theme';

import { TopItem } from './components';

export const TopNav = ({
  isMobile,
  isTrayOpen,
  openTray
}: {
  current: string;
  isMobile: boolean;
  isTrayOpen: boolean;
  openTray(): void;
}) => {
  const color = isMobile && isTrayOpen ? COLORS.WHITE : COLORS.GREYISH_BROWN;

  return (
    <Box
      variant="rowAlign"
      justifyContent="flex-end"
      ml={SPACING.BASE}
      mb={SPACING.BASE}
      mt={SPACING.MD}
      mr={SPACING.XS}
    >
      {isMobile && (
        <TopItem
          title="NAVIGATION_MENU"
          icon="nav-menu"
          left={true}
          color={color}
          current={isTrayOpen}
          onClick={openTray}
        />
      )}
      {!isMobile && (
        <>
          {/* Center Banner by adding left margin */}
          <Icon
            type="logo-mycrypto-text-blue"
            width="64px"
            style={{ marginRight: '35px', marginLeft: '35px' }}
          />
        </>
      )}
    </Box>
  );
};
