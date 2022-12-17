import { component$ } from "@builder.io/qwik";

export const RouterHead = component$(() => {
  return (
    <>
      <title>Qwik Workers Demo</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Qwik Workers Demo" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </>
  );
});
