import React from "react";
import {Box} from '@gluestack-ui/themed'

export const Card = ({ children }: any) => {
  return (
    <Box
    flex={1}
    w="$5/6"
    h="$1/4"
    bg="$violet400"
    >
      {children}
    </Box>
  );
};
