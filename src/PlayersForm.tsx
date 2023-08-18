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
      <button
        className="border border-dotted border-gray-500 py-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-md px-4"
        type="button"
        onClick={addPlayer}
      >
        Add player
      </button>
    </form>
  );
};

export default PlayersForm;
