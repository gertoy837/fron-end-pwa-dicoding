// BAD
const albums = [
    {
      name: '25',
      singer: 'Adele',
      sold: 1500000,
    },
    {
      name: 'Changes',
      singer: 'Justin Biebier',
      sold: 700000,
    },
    {
      name: 'Songs About Jane',
      singer: 'Maroon 5',
      sold: 1250000,
    },
    {
      name: 'Mylo Xyloto',
      singer: 'Coldplay',
      sold: 980000,
    },
  ];
   
  const SALES_TARGET = 1000000;
  const greatSingers = [];
   
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].sold > SALES_TARGET) {
      greatSingers.push(albums[i].singer);
    }
  }
   
  console.log(greatSingers); // -> [Adele, Maroon 5]

//   Good
const albumss = [
    {
      name: '25',
      singer: 'Adele',
      sold: 1500000,
    },
    {
      name: 'Changes',
      singer: 'Justin Biebier',
      sold: 700000,
    },
    {
      name: 'Songs About Jane',
      singer: 'Maroon 5',
      sold: 1250000,
    },
    {
      name: 'Mylo Xyloto',
      singer: 'Coldplay',
      sold: 980000,
    },
  ];
   
  const SALES_TARGETT = 1000000;
  const greatSingerss = albumss.filter((album) => album.sold > SALES_TARGETT)
      .map((filteredAlbum) => filteredAlbum.singer);
   
  console.log(greatSingerss); // -> [Adele, Maroon 5]