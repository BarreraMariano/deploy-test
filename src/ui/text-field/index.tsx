import React from "react";

type PropsTextField = {
  typeText: string;
  name: string;
};

export function MainTextField(props: PropsTextField) {
  return <input type={props.typeText} name={props.name} />;
}
