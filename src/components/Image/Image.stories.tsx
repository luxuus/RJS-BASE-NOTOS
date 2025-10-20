/* eslint-disable */
import React from 'react';
import Image from './Image';

export default {
  title: 'UI/Image',
  component: Image,
};

const VALID = 'https://picsum.photos/id/1025/800/500';
const BROKEN = 'https://example.com/does-not-exist.jpg';

export const Default = () => (
  <Image
    src={VALID}
    description="Un chien majestueux dans la lumière du soir"
    alt="Chien"
    style={{ maxWidth: 480 }}
  />
);

export const WithFallback = () => (
  <Image
    src={BROKEN}
    fallbackSrc="https://picsum.photos/seed/fallback/800/500"
    description="Fallback appliqué sur erreur de chargement"
    style={{ maxWidth: 480 }}
  />
);

export const TopOverlay = () => (
  <Image
    src={VALID}
    description="Overlay en haut"
    overlayPosition="top"
    style={{ maxWidth: 480 }}
  />
);

export const CenterBadge = () => (
  <Image
    src={VALID}
    description="Label centré"
    overlayPosition="center"
    aspectRatio="1 / 1"
    radius="16px"
    fit="cover"
    style={{ maxWidth: 360 }}
  />
);
