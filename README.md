# <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg> Feather Icons for Qwik

## What is Feather?

Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency, and flexibility.

https://feathericons.com

### Installation

```shell
npm install qwik-feather-icons
```

### Usage

> **Note:** using [thumbs-up icon](https://feathericons.com/?query=thumbs-up) just as an example.

#### 1. Include

```ts
import { ThumbsUpIcon } from "qwik-feather-icons";
```
or
```ts
import { Icon } from "qwik-feather-icons";
```

#### 2. Use

```tsx
<ThumbsUpIcon ...props />
```

or

```tsx
<Icon name="thumbs-up" ...props />
```

#### Props

All components have these **optional** `props`:

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

With default values encapsulated in a `defaultIconProps` object:

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

> **Important:** in most cases you should use `<'Name'Icon/>` components (such as `<ThumbsUpIcon/>`), they are just a wrapper around the actual inline `<svg>`.

#### Context

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
      <ThumbsDownIcon/> { /* huge (96px) hotpink icon */ }
      <WifiOffIcon/>    { /* same here */ }
    </div>
  );
});
```

### License

This package is licensed under the [MIT License](https://github.com/yeyon/qwik-feather-icons/blob/main/LICENSE).

### Acknowledgment

Thanks to **Cole Bemis** for the Feather Project. Here is his website https://colebemis.com/.

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
