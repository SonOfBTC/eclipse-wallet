import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import ImageMaskLGCards from '../../assets/images/ImageMaskLGCards.png';
import ImageMaskXLCards from '../../assets/images/ImageMaskXLCards.png';
import ImageMaskXXLCards from '../../assets/images/ImageMaskXXLCards.png';

const styles = StyleSheet.create({
  sizeSM: {
    width: 32,
    height: 32,
  },
  sizeNormal: {
    width: 40,
    height: 40,
  },
  sizeMD: {
    width: 48,
    height: 48,
  },
  sizeXL: {
    width: 70,
    height: 70,
  },
  block: {
    width: '100%',
    height: '100%',
  },
  imageMask: {
    position: 'absolute',
    marginTop: -1,
    marginLeft: -1,
  },
  imageMaskLG: {
    width: 72,
    height: 72,
  },
  imageMaskXL: {
    width: 196,
    height: 196,
  },
  imageMaskXXL: {
    width: 264,
    height: 264,
  },
});

const GlobalImage = ({
  name,
  source,
  size,
  mask,
  resizeMode,
  style,
  ...props
}) => {
  const imageStyles = {
    ...(size === 'sm' ? styles.sizeSM : {}),
    ...(size === 'md' ? styles.sizeMD : {}),
    ...(size === 'xl' ? styles.sizeXL : {}),
    ...(size === 'block' ? styles.block : {}),
  };

  return (
    <>
      <Image
        // source={name ? getImage(name) : source}
        source={source}
        resizeMode={resizeMode || 'contain'}
        style={[styles.sizeNormal, imageStyles, style]}
        {...props}
      />

      {mask && (
        <View style={styles.imageMask}>
          {mask === 'lg' && (
            <GlobalImage source={ImageMaskLGCards} style={styles.imageMaskLG} />
          )}

          {mask === 'xl' && (
            <GlobalImage source={ImageMaskXLCards} style={styles.imageMaskXL} />
          )}

          {mask === 'xxl' && (
            <GlobalImage
              source={ImageMaskXXLCards}
              style={styles.imageMaskXXL}
            />
          )}
        </View>
      )}
    </>
  );
};

export default GlobalImage;
