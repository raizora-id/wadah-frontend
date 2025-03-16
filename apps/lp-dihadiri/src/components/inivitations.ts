export type Invitation = {
    poster: string;
    name: string;
  };
  
  export const invitations = [
    { poster: "/img/apple-tv-rebuild/posters/airplane.webp", name: "Airplane" },
    {
      poster: "/img/apple-tv-rebuild/posters/family-man.webp",
      name: "Family man",
    },
    {
      poster: "/img/apple-tv-rebuild/posters/laboratory.webp",
      name: "Laboratory",
    },
    { poster: "/img/apple-tv-rebuild/posters/napoleon.webp", name: "Napoleon" },
    {
      poster: "/img/apple-tv-rebuild/posters/person-in-darkness.webp",
      name: "Person in Darkness",
    },
    {
      poster: "/img/apple-tv-rebuild/posters/scary-building.webp",
      name: "Scary Building",
    },
    { poster: "/img/apple-tv-rebuild/posters/stars.webp", name: "Stars" },
  ];
  
  export const randomInvitationsSet1 = invitations
    .sort(() => Math.random() - 0.5)
    .concat(invitations.sort(() => Math.random() - 0.5))
    .concat(invitations.sort(() => Math.random() - 0.5));
  
  export const randomInvitationsSet2 = invitations
    .sort(() => Math.random() - 0.5)
    .concat(invitations.sort(() => Math.random() - 0.5))
    .concat(invitations.sort(() => Math.random() - 0.5))
    .sort(() => Math.random() - 0.5);
  