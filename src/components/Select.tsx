import { Divider, Select } from "antd";
import { SetStateAction } from 'react';
interface Props {
  options: string[];
  label: string;
  value: { target: { value: SetStateAction<undefined>; }; };
  onChange: any;
}

const SelectC: React.FC<Props> = ({ options, label, value, onChange }) => {
  const required = <strong className="text-red-400">*</strong>;
  return (
    <div className="flex justify-around items-center w-full m-6">
      <label className="w-3/12">
        {required} {label}
      </label>
      <Select
        style={{ width: 400, height: 20 }}
        value={value}
        onChange={onChange}
        dropdownRender={(menu: any) => (
          <>
            {menu}
            <Divider style={{ margin: "8px 0" }} />
          </>
        )}
        options={options.map((item: string) => ({
          label: item,
          value: item.toLocaleLowerCase(),
        }))}
      />
    </div>
  );
};

export default SelectC;
