import React from "react";
import { FormattedMessage } from "react-intl";

function Header() {
  const user = "Anacleta";
  return (
    <div>
      <h1>
        <FormattedMessage id="app.header" defaultMessage={"Hola Mundo"} />
      </h1>
      <p>
        <FormattedMessage
          id="app.user"
          defaultMessage={"bienvenido"}
          values={{ user }}
        />
      </p>
    </div>
  );
}

export default Header;
