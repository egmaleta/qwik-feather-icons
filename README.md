# Feather Icons for Qwik

## What is Feather?

Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency, and flexibility.

This icon library supports Feather Icons [v4.29.0](https://feathericons.com).

### Installation

```shell
npm install --save qwik-feather-icons
```

### Usage

#### Include

You can import the icon(s) you need as usual:

```ts
import { ThumbsUpIcon } from "qwik-feather-icons";
```
or import them all at once:

```ts
import * as IconPack from "qwik-feather-icons";

export const App = component$(() => {
  return (
    <div>
      <IconPack.ThumbsUpIcon />
      <IconPack.BatteryChargingIcon />
    </div>
  );
});

```

#### Props

All icons have these optional `props`:

```ts
export interface IconProps {
    size?: number,
    color?: string,
    strokeWidth?: number,
    strokeLineCap?: string,
    strokeLineJoin?: string,
    class?: string
}
```

With default values defined in a `defaultIconProps` object:

```ts
export const defaultIconProps: IconProps = {
  size: 24,
  color: "currentColor",
  strokeWidth: 2,
  strokeLineCap: "round",
  strokeLineJoin: "round",
  class: ""
};
```

#### `Icon` Component

This icon library has an `Icon` component with a required prop called `name`:
```tsx
import { Icon } from "qwik-feather-icons";

export const App = component$(() => {
  return (
    <div>
      <Icon name="battery-charging" /> { /* equivalent to <BatteryChargingIcon /> */ }
    </div>
  );
});
```

Although is better to use the `<'Name'Icon />` variant (such as `<ThumbsUpIcon />`) because it wraps the actual inline `<svg>`.

#### `IconContext`

Feather icons use Qwik Context to simply apply default `props` to all icons. Use `useContextProvider` at the root of the app (or anywhere above the icons in the tree) and pass in a configuration object with props to be applied by default to all icons.

```tsx
import { component$, useContextProvider } from "@builder.io/qwik";
import { IconContext, WifiOffIcon, ThumbsUpIcon } from "qwik-feather-icons";

export const App = component$(() => {
  const newDefaultProps = {
    size: 96,
    color: "hotpink",
    strokeWidth: 2,
    strokeLineCap: "round",
    strokeLineJoin: "round",
    class: "just an example"
  };

  useContextProvider(IconContext, newDefaultProps);

  return (
    <div>
      <ThumbsDownIcon /> { /* huge (96px) hotpink icon */ }
      <WifiOffIcon />    { /* same here */ }
    </div>
  );
});
```

### License

This package is licensed under the [MIT License](https://github.com/yeyon/qwik-feather-icons/blob/main/LICENSE).

### Acknowledgment

Thanks to **Cole Bemis** for the Feather Project. Here is his website https://colebemis.com/.
