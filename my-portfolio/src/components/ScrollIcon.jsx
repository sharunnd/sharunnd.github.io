import React, { useEffect, useState, forwardRef } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { BsArrowUpCircle } from 'react-icons/bs';

const ScrollIcon = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      display={isVisible ? 'block' : 'none'}
      position="fixed"
      bottom="4rem"
      right="4rem"
      bg="transparent"
      onClick={scrollToTop}
      borderRadius="full"
      overflow="hidden"
      cursor="pointer"
      ref={ref} // Forward the ref to the underlying DOM element
    >
      <IconButton
        icon={<BsArrowUpCircle />}
        bg="transparent"
        size="lg"
        _hover={{ bg: 'transparent' }}
      />
    </Box>
  );
});

export default ScrollIcon;
