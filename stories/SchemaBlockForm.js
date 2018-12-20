import React from "react";
import PropTypes from "prop-types";

import FormApp from "us-forms-system/lib/js/containers/FormApp";
import FormPage from "us-forms-system/lib/js/containers/FormPage";

import configureStore from "redux-mock-store";

import "us-forms-system/lib/css/styles.css";
import "./SchemaBlockForm.css";

const mockStore = configureStore([]);

export function createBlockChapter({ schema, uiSchema }) {
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

function createBlockForm({ blockChapter }) {
  return {
    title: "📚",
    subTitle: "",
    formId: "",
    urlPrefix: "/",
    trackingPrefix: "form-",
    transformForSubmit: "",
    submitUrl: "",
    confirmation: "",
    defaultDefinitions: {},
    chapters: {
      blockChapter: blockChapter
    }
  };
}

export default function Form({ schemaBlocks }) {
  const blockChapter = createBlockChapter({
    schema: schemaBlocks.schema,
    uiSchema: schemaBlocks.ui
  });
  const formConfig = createBlockForm({ blockChapter: blockChapter });

  const store = mockStore({ form: blockChapter });
  const currentLocation = {
    pathname: "block"
  };

  debugger;

  return (
    <div>
      <FormApp
        formConfig={formConfig}
        currentLocation={currentLocation}
        store={store}
      >
        <FormPage
          store={store}
          route={{
            pageConfig: { pageKey: "block", title: "Blarg" },
            pageList: [{ path: "block" }]
          }}
          location={currentLocation}
        />
      </FormApp>
    </div>
  );
}

Form.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object
};
