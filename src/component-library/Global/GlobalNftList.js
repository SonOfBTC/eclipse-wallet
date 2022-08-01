import React from 'react';

import GlobalNft from './GlobalNft';
import GlobalText from './GlobalText';
import GlobalSkeleton from '../../component-library/Global/GlobalSkeleton';
import Grid from '../../component-library/Grid/Grid';

const GlobalNftList = ({ nonFungibleTokens, onClick }) => {
  if (nonFungibleTokens === null) return <GlobalSkeleton type="NftList" />;
  if (nonFungibleTokens.length === 0) return <Empty />;
  return <List nonFungibleTokens={nonFungibleTokens} onClick={onClick} />;
};

const List = ({ nonFungibleTokens, onClick }) => (
  <Grid
    spacing={1}
    columns={2}
    items={nonFungibleTokens.map(nft => (
      <GlobalNft nft={nft} onClick={onClick} />
    ))}
  />
);

const Empty = () => (
  <GlobalText type="body2" color="primary" numberOfLines={1} center="true">
    {'No NFTs found'}
  </GlobalText>
);

export default GlobalNftList;
