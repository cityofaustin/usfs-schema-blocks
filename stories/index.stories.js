import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./SchemaBlockForm";

import raceBlocks from "../src/blocks/raceBlocks";
import genderBlocks from "../src/blocks/genderBlocks";

storiesOf("Race", module).add("Default", () => {
  return <Form schemaBlocks={raceBlocks} />;
});

storiesOf("Gender", module).add("Default", () => {
  return <Form schemaBlocks={genderBlocks} />;
});
