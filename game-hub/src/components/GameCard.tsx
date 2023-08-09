import Game from "../entities/Game";
import { Box, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <HStack>
              <Box marginRight={2}>
                <Emoji rating={game.rating_top} />
              </Box>
              <CriticScore score={game.metacritic} />
            </HStack>
          </HStack>
          <Heading fontSize="2xl">
            <Link to={"/games/" + game.slug}>{game.name}</Link>
          </Heading>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
