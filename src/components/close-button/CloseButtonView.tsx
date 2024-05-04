import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { forwardRef } from "react";
import { Button } from "../button/Button";
import { BUTTON_TYPE } from "../button/buttonType";

interface CloseButtonViewProps {
  ariaLabel: string;
  onClick: Required<JSX.IntrinsicElements["button"]>["onClick"];
  className?: string;
}

const CloseButtonView = forwardRef<HTMLButtonElement, CloseButtonViewProps>(
  function CloseButtonView({ ariaLabel, onClick, className }, ref) {
    return (
      <Button
        onClick={onClick}
        className={className}
        buttonType={BUTTON_TYPE.close}
        ref={ref}
        data-vaul-no-drag
      >
        <span className="sr-only">{ariaLabel}</span>
        <FontAwesomeIcon
          icon={faXmark}
          role="presentation"
          size="xl"
          className="m-auto pointer-events-none"
        />
      </Button>
    );
  },
);

export { CloseButtonView };
