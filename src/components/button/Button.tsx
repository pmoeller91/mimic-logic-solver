import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef } from 'react';

import styles from './button.module.scss';
import { BUTTON_TYPE, ButtonType } from './buttonType';

interface ButtonProps
  extends ComponentPropsWithRef<'button'>,
    Record<string, unknown> {
  className?: string;
  buttonType?: ButtonType;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, children, buttonType, ...remainingProps },
  ref
) {
  const defaultedButtonType = buttonType ?? BUTTON_TYPE.primary;
  const classNames = clsx(
    styles.button,
    defaultedButtonType === BUTTON_TYPE.primary && styles['button-primary'],
    defaultedButtonType === BUTTON_TYPE.secondary && styles['button-secondary'],
    defaultedButtonType === BUTTON_TYPE.close && styles['button-close'],
    className
  );
  return (
    <button className={classNames} ref={ref} {...remainingProps}>
      {children}
    </button>
  );
});

export { Button };
