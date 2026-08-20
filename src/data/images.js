export const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: u("photo-1503376780353-7e6692767b70", 2000),
  ceramic: u("photo-1610647752706-3bb12232b3ab"),
  ppf: u("photo-1633014041037-f5446fb4ce99"),
  graphene: u("photo-1520340356584-f9917d1eea6f"),
  tint: u("photo-1620584898989-d39f7f9ed1b7"),
  workshop: u("photo-1676018366904-c083ed678e60"),
  interior: u("photo-1549064233-945d7063292f"),
  polishing: u("photo-1656709798329-c6ef352a89df"),
  engineOil: u("photo-1618783129985-dd97dbe4ad99"),
  gallery: [
    u("photo-1567808291548-fc3ee04dbcf0", 900),
    u("photo-1554294314-80a5fb7e6bd5", 900),
    u("photo-1694678505383-676d78ea3b96", 900),
    u("photo-1632823469850-2f77dd9c7f93", 900),
    u("photo-1518306727298-4c17e1bf6942", 900),
    u("photo-1605437241278-c1806d14a4d9", 900),
  ],
};
