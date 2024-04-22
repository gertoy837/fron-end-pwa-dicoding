function showPlayerList(players) {
  const { strName, strAvatar, strDescription, strSport } = player;

  const data = {
    name: strName,
    avatar: strAvatar,
    description: strDescription,
  };

  switch (strSport) {
    case "football":
      data.fifaRangking = player.strFifaRangking;
      break;
    case "basketball":
      data.fifaRangking = player.strFifaRangking;
      break;
  }

  render(data);
}
