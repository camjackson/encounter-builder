import { ChangeEvent } from 'react';

export type Player = {
  name: string;
  level: number;
};

type Props = {
  player: Player;
  removePlayer: () => void;
  updatePlayer: (field: keyof Player, value: Player[typeof field]) => void;
};

const PlayerFormRow = ({ player, removePlayer, updatePlayer }: Props) => {
  return (
    <div className="mb-2 flex flex-row gap-4 items-center">
      <button
        type="button"
        className="self-end border w-8 h-8 rounded-md border-red-600 hover:bg-red-300 active:bg-red-400"
        onClick={removePlayer}
      >
        ❌
      </button>
      <Input
        className="w-36"
        type="text"
        value={player.name}
        onChange={(name) => updatePlayer('name', name)}
        label="Name"
        placeholder="Drizzt"
      />
      <Input
        className="w-16"
        type="number"
        value={player.level}
        onChange={(level) => updatePlayer('level', level)}
        label="Level"
        placeholder="20"
        min={1}
        max={20}
        step={1}
      />
    </div>
  );
};

type InputProps = InputType & {
  className?: string;
  label: string;
  placeholder: string;
  onChange: (val: string) => void;
};

type InputType =
  | { type: 'text'; value: string }
  | { type: 'number'; value: number; min: number; max: number; step: number };

const Input = ({
  type,
  value,
  onChange,
  label,
  placeholder,
  className,
}: InputProps) => {
  return (
    <div className="relative">
      <label className="flex flex-col">
        <div>{label}</div>
        <input
          className={`mt-1 pl-2 border ${className}`}
          {...{ type, placeholder, value }}
          name={label}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default PlayerFormRow;
