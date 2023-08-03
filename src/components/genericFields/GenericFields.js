import React from "react";
import Input from "./fields/Input.js";
import Select from "./fields/Select.js";
import MultipleSelect from "./fields/Multiple.js";

function GenericFields(props) {
  const {
    label,
    type,
    onChange,
    infos,
    value,
    selected,
    setSelected,
    options,
    zerar,
    setZerar,
    setInfos,
    dados,
    key,
  } = props;

  switch (type) {
    case "number":
      return (
        <Input
          type="number"
          label={label}
          defaultValue={1}
          min={1}
          onChange={onChange}
          value={value}
        />
      );

    case "email":
      return (
        <Input type="email" label={label} onChange={onChange} value={value} />
      );

    case "password":
      return (
        <Input
          type="password"
          label={label}
          defaultValue={1}
          min={1}
          onChange={onChange}
          value={value}
        />
      );

    case "text":
      return (
        <Input type="text" label={label} onChange={onChange} value={value} />
      );

    case "select":
      return (
        <Select
          onChange={onChange}
          key={key}
          label={label}
          selected={selected}
          dados={[
            { key: "Nhabinde", nome: "Nhabinde" },
            { key: "Nhabinde1", nome: "Nhabinde1" },
            { key: "Nandza", nome: "Nandza" },
            { key: "Kek4", nome: "Kek4" },
          ]}
        />
      );

    case "multiselect":
      return (
        <MultipleSelect
          label={label}
          selected={selected}
          setSelected={setSelected}
          infos={infos}
        />
      );

    default:
      return null;
  }
}

export default GenericFields;
