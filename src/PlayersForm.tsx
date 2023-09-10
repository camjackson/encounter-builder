import Button from './Button';
import PlayerFormRow, { Player } from './PlayerFormRow';

type Props = {
  players: Player[];

  addPlayer: () => void;
  removePlayer: (index: number) => () => void;
  updatePlayer: (
    index: number,
  ) => (field: keyof Player, value: Player[typeof field]) => void;
};

const PlayersForm = ({
  players,
  addPlayer,
  removePlayer,
  updatePlayer,
}: Props) => {
  return (
    <form className="flex flex-col items-start">
      {players.map((player, index) => (
        <PlayerFormRow
          player={player}
          removePlayer={removePlayer(index)}
          updatePlayer={updatePlayer(index)}
        />
      ))}
      <Button onClick={addPlayer}>Add player</Button>
    </form>
  );
};

export default PlayersForm;
