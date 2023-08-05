import { Tooltip } from "@mui/material";
import { Character, Headshot, Layout, Name } from "./cast.styles";

const Cast = ({ name, character, image }) => (
  <Layout>
    <Headshot
      data-testid="headshot"
      $image={image ?? "/images/person.png"}
      $y={image ? -5 : 2}
    />
    <Tooltip title={name} placement="top" enterDelay={1000}>
      <Name>{name}</Name>
    </Tooltip>
    <Tooltip title={character} placement="top" enterDelay={1000}>
      <Character>{character.replace(/\(voice\)/i, "").trim()}</Character>
    </Tooltip>
  </Layout>
);

export default Cast;
