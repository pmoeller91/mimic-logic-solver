import { paramFieldErrorTestId } from "./paramFieldErrorTestId";

// Special field used to represent a missed case in the ChestHintParamsField
function ErrorField() {
  return <div data-testid={paramFieldErrorTestId} />;
}

export { ErrorField };
