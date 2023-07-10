import { Game } from "../hooks/useGames";
import {
  Box,
  Card,
  CardBody,
  Center,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import GameDetailsModal from "./GameDetailsModal";

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
            <Emoji rating={game.rating_top} />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <HStack justifyContent="space-between" marginTop={2}>
              <div></div>
              <GameDetailsModal />
            </HStack>
          </Heading>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
