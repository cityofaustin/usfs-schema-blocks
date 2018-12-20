import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Form from "./USFSForm";

import { Button, Welcome } from "@storybook/react/demo";

import whatHappenedChapter from "../src/whatHappenedChapter";
import shareEvidenceChapter from "../src/shareEvidenceChapter";
import officerDetailsChapter from "../src/officerDetailsChapter";
import witnessDetailsChapter from "../src/witnessDetailsChapter";
import aboutYouChapter from "../src/aboutYouChapter";
import howYouFoundUsChapter from "../src/howYouFoundUsChapter";

import raceBlocks from "../src/blocks/raceBlocks";

function createBlockChapter({ schema, uiSchema }) {
  return {
    title: "I'm for blocks!",
    pages: {
      block: {
        path: "block",
        title: "I'm for blocks!",
        schema: {
          type: "object",
          properties: schema
        },
        uiSchema: uiSchema
      }
    }
  };
}

const currentLocation = {
  pathname: "/block"
};

storiesOf("Race", module).add("Default", () => {
  const raceChapter = createBlockChapter({
    schema: raceBlocks.schema,
    uiSchema: raceBlocks.ui
  });

  return <Form location={currentLocation} chapter={raceChapter} page="block" />;
});
