import { Player } from './PlayerFormRow';
import PlayersForm from './PlayersForm';
import useLocalStorageState from './useLocalStorageState';

const newPlayer = (): Player => ({ name: '', level: 0 });

const App = () => {
  const [players, setPlayers] = useLocalStorageState('players', () => [
    newPlayer(),
  ]);

  const addPlayer = () => setPlayers((old) => old.concat(newPlayer()));
  const removePlayer = (index: number) => () =>
    setPlayers((old) => old.filter((_, i) => i !== index));
  const updatePlayer =
    (index: number) => (field: keyof Player, value: Player[typeof field]) =>
      setPlayers((old) =>
        old.map((player, i) =>
          i === index ? { ...player, [field]: value } : player,
        ),
      );

  return (
    <>
      <main className="max-w-5xl h-full mx-auto bg-white shadow-2xl px-10 pt-5 flex flex-col">
        <h1 className="text-3xl mb-3">D&D Encounter Builder</h1>
        <PlayersForm {...{ players, addPlayer, removePlayer, updatePlayer }} />
      </main>
    </>
  );
};

export default App;
