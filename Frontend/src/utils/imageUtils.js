export const localImages = [
  '/images/3d-cryptocurrency-rendering-design (1).jpg',
  '/images/3d-cryptocurrency-rendering-design.jpg',
  '/images/bitcoin-3327643_1280.jpg',
  '/images/bitcoin-3411355_1280.jpg',
  '/images/bitcoin-3510168_1280.jpg',
  '/images/bitcoin-4235718_1280.jpg',
  '/images/bitcoin-4503758_1280.jpg',
  '/images/bitcoin-6772378_1280.png',
  '/images/bitcoin-6884852_1280.jpg',
  '/images/bitcoin-7077716_1280.jpg',
  '/images/bitcoin-7693848_1280.png',
  '/images/blockchain-3041480_1280.jpg',
  '/images/blockchain-3368174_1280.jpg',
  '/images/blockchain-7074949_1280.jpg',
  '/images/blockchain-9268421_1280.png',
  '/images/crypto-4231398_1280.jpg',
  '/images/crypto-7072522_1280.jpg',
  '/images/crypto-7678815_1280.jpg',
  '/images/cryptocurrency-3409658_1280.jpg',
  '/images/cryptocurrency-3412233_1280.jpg',
  '/images/cryptocurrency-3412307_1280.jpg',
  '/images/cryptocurrency-3423263_1280.jpg',
  '/images/ethereum-6928106_1280.jpg',
  '/images/libra-4288548_1280.jpg',
  '/images/libra-4338939_1280.jpg',
  '/images/nft-7219625_1280.png',
  '/images/wear-3080558_1280.jpg',
  '/images/work-1627703_1280.jpg',
];

export function getRandomLocalImage() {
  const randomIndex = Math.floor(Math.random() * localImages.length);
  return localImages[randomIndex];
}
