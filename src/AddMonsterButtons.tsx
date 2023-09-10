import Button from './Button';

const monsterCRs = [
  '0',
  '1/8',
  '1/4',
  '1/2',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
];

type Props = {
  addMonster: (cr: string) => () => void;
};

const AddMonsterButtons = ({ addMonster }: Props) => {
  return (
    <div className="flex flex-row gap-1 flex-wrap">
      {monsterCRs.map((cr) => (
        <Button key={cr} onClick={addMonster(cr)}>
          {cr}
        </Button>
      ))}
    </div>
  );
};

export default AddMonsterButtons;
