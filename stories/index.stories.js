import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./SchemaBlockForm";

import raceBlocks from "../src/blocks/raceBlocks";

storiesOf("Race", module).add("Default", () => {
  return <Form schemaBlocks={raceBlocks} />;
});
