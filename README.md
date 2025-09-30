## fivem-ui-core

English version first. Scroll for Polish below.

### What this solves
- **Universal UI**: works with ESX, QB and standalone — framework-agnostic.
- **One events API**: consistent UI ↔ Lua communication. Use `onEvent` and `sendEvent`.
- **Themable**: colors, fonts, radius — match your server branding.
- **Fast start**: from install to working HUD in minutes.

---

## Installation

```bash
npm i fivem-ui-core
```

- Requires Svelte ^5 as a peer dependency.
- Build your app (HUD, phone, inventory) in Svelte and import components and API from `fivem-ui-core`.

---

## Quick start (Svelte)

1) Wrap your app with `ThemeProvider` (default theme works out of the box, or pass your own):

```svelte
<script>
  import { ThemeProvider, Notification, ProgressBar } from 'fivem-ui-core';
  let hp = 75;

  const theme = {
    colors: {
      primary: '#4CC9F0',
      success: '#2ecc71',
      warning: '#f39c12',
      error: '#e74c3c',
      surface: '#161616',
      onSurface: '#ffffff',
      border: '#2a2a2a'
    },
    radius: '10px',
    fontFamily: 'Inter, system-ui, sans-serif'
  };
</script>

<ThemeProvider {theme}>
  <Notification type="success" message="Logged in successfully!" />
  <ProgressBar value={hp} max={100} />
</ThemeProvider>
```

2) Receive an event from Lua and display a notification:

```ts
import { onEvent } from 'fivem-ui-core';

onEvent('showNotify', (data) => {
  // { type: 'info' | 'success' | 'warning' | 'error', message: string }
  console.log('Notification:', data);
});
```

3) Send a callback from UI to Lua:

```ts
import { sendEvent } from 'fivem-ui-core';
await sendEvent('callbackDone', { ok: true });
```

---

## NUI communication (UI ↔ Lua)

### From UI (Svelte) to Lua
- Use `sendEvent(eventName, data)` — it POSTs to `https://<resource>/<eventName>` under FiveM.
- In dev mode (outside FiveM) it logs and returns a mock `Response { ok: true }` so development stays smooth.

```ts
import { sendEvent } from 'fivem-ui-core';

await sendEvent('playerReady', { name: 'John' });
```

### createNuiClient — timeouts, retries, JSON
Need more resiliency? Use the client with built-in timeouts, retries (exponential backoff) and logging.

```ts
import { createNuiClient } from 'fivem-ui-core';

const client = createNuiClient({
  timeoutMs: 5000,     // default 5000
  retries: 2,          // default 2 attempts
  backoffMs: 300,      // default 300ms, grows exponentially per attempt
  logger: (level, message, meta) => console[level]?.('[nui]', message, meta)
});

// raw Response
const res = await client.send('inventory:save', { items: [] });
if (!res.ok) throw new Error('Save error');

// auto JSON parse
const data = await client.sendJson('player:getProfile', { id: 123 });
```

Best practices:
- Avoid event spam: batch updates and use debounce/throttle.
- For critical actions use `sendJson` with response validation.
- Show progress in UI; on error, retry or offer a retry action.

Lua side (client.lua):

```lua
-- Register a callback with the same name
RegisterNUICallback('playerReady', function(data, cb)
  print('UI said:', json.encode(data))
  cb({ ok = true })
end)
```

### From Lua to UI (Svelte)
- In Lua use `SendNUIMessage` with `action` and `data`.
- In UI listen to that `action` via `onEvent`.

```lua
SendNUIMessage({
  action = 'showNotify',
  data = { type = 'info', message = 'New notification!' }
})
```

```ts
import { onEvent } from 'fivem-ui-core';

onEvent('showNotify', (data) => {
  // e.g., show a styled toast based on type
});
```

### Useful FiveM tips
- Remember focus: `SetNuiFocus(true, true)` so UI can receive input.
- On close: `SetNuiFocus(false, false)`.
- Keep names consistent: `SendNUIMessage.action` ↔ `onEvent('<action>')` and `sendEvent('<event>')` ↔ `RegisterNUICallback('<event>')`.

---

## Theming
- Provide a theme to `ThemeProvider`.
- It generates CSS variables used by components.

Theme keys:
- `colors.primary|success|warning|error|surface|onSurface|border`
- `radius` — component border radius
- `fontFamily` — base font

Minimal example:

```svelte
<script>
  import { ThemeProvider, defaultTheme } from 'fivem-ui-core';
  // copy defaultTheme and override only what you need
  const theme = {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: '#00E5A8'
    },
    radius: '12px'
  };
</script>

<ThemeProvider {theme}>
  <slot />
</ThemeProvider>
```

### Theme presets and server palettes
- Presets available: `presetLight`, `presetDark`, and example `serverPalettes` (red/blue/purple).

```ts
import { presetLight, presetDark, serverPalettes } from 'fivem-ui-core';

// Light
const themeLight = presetLight;

// Dark with server palette "purple" as primary
const themeDarkPurple = {
  ...presetDark,
  colors: {
    ...presetDark.colors,
    primary: serverPalettes.purple.primary
  }
};
```

---

## Components (overview)

### Notification
- **Props**: `type = 'info' | 'success' | 'warning' | 'error'`, `message`, `icon?`
- **Usage**:

```svelte
<Notification type="success" message="Operation completed" />
```

### Modal
- **Props**: `open` (bind), `title`
- **Slots**: default, `actions`

```svelte
<script>
  let open = true;
</script>

<Modal bind:open title="Sample modal">
  Modal content
  <div slot="actions">
    <button on:click={() => (open = false)}>Close</button>
  </div>
</Modal>
```

### ProgressBar
- **Props**: `value`, `max = 100`, `color?`
- **Slot**: `label` (defaults to percentage)

```svelte
<ProgressBar value={75} />
<ProgressBar value={30} color="#ff4d4f" />
```

### ProgressCircle
- **Props**: `value`, `max = 100`, `size = 48`, `stroke = 6`, `color?`

```svelte
<ProgressCircle value={hp} max={100} size={64} />
```

### StatusBar
- **Props**: `hp`, `hunger`, `stamina` (0–100)

```svelte
<StatusBar hp={75} hunger={50} stamina={90} />
```

### Hotbar
- **Props**: `items: { slot: number; label?: string; icon?: string }[]`, `selected?: number`

```svelte
<Hotbar items={[{ slot: 1, label: 'Pistol' }, { slot: 2, label: 'Medkit' }]} selected={1} />
```

### RadialMenu
- **Props**: `open`, `items: { id: string; label: string }[]`
- **Events**: `on:select={(e) => e.detail /* id */}`

```svelte
<RadialMenu
  open
  items={[{ id: 'anim', label: 'Animation' }, { id: 'veh', label: 'Vehicle' }]}
  on:select={(e) => console.log('Selected:', e.detail)}
/>
```

### List
- **Props**: `items: { id; label; description? }[]`, `selectedId?`, `onSelect?`

```svelte
<script>
  import { List } from 'fivem-ui-core';
  let selected = null;
</script>

<List items={[{ id: 1, label: 'Option A' }, { id: 2, label: 'Option B', description: 'Desc' }]} onSelect={(id) => selected = id} />
```

### TextInput
- **Props**: `value`, `placeholder?`, `label?`, `type = 'text'|'password'|'number'`, `disabled?`, `name?`, `id?`, `onEnter?`

```svelte
<script>
  import { TextInput } from 'fivem-ui-core';
  let nick = '';
  function handleEnter(v) { console.log('Enter:', v); }
</script>

<TextInput bind:value={nick} label="Nick" placeholder="Type your nick" onEnter={handleEnter} />
```

### ContextMenu
- **Props**: `open`, `x`, `y`, `items: { id; label; disabled? }[]`
- **Events**: `on:select={(e) => e.detail /* id */}`

```svelte
<script>
  import { ContextMenu } from 'fivem-ui-core';
  let menu = { open: true, x: 300, y: 200 };
  const items = [{ id: 'copy', label: 'Copy' }, { id: 'del', label: 'Delete', disabled: true }];
</script>

<ContextMenu {items} open={menu.open} x={menu.x} y={menu.y} on:select={(e) => console.log('Selected:', e.detail)} />
```

### Snackbar (toast queue)
- **Usage**: `Snackbar` component + `toasts` store and helpers `push/remove/clear`

```svelte
<script>
  import { Snackbar, push } from 'fivem-ui-core';
  function show() { push('Operation completed', { type: 'success', timeout: 2000 }); }
</script>

<button on:click={show}>Show toast</button>
<Snackbar position="top-right" />
```

---

## Adapters (ESX and QB)
- Convenience adapters `esx` and `qb` add prefixes for actions/events (e.g. `esx:notify`, `qb:ready`).

```ts
import { esx, qb } from 'fivem-ui-core';

// Listen for Lua event (SendNUIMessage action = 'esx:notify')
const off = esx.on('notify', (data) => {
  console.log('ESX notify:', data);
});

// Send response to Lua (RegisterNUICallback 'qb:ready')
await qb.send('ready', { ok: true });

off();
```

---

## Dev mode vs. FiveM
- Under FiveM, UI → Lua uses `GetParentResourceName()` and POST to `https://<resource>/<event>`.
- In dev (browser outside FiveM), `sendEvent` does not send network requests — it logs and returns a mock `Response { ok: true }` so you can develop UI without errors.

---

## Tests (Vitest + Testing Library)
- Environment: `jsdom`, Svelte compilation via Vite plugin.

Scripts:

```bash
npm test         # once
npm run test:watch
```

Scope examples:
- NUI (onEvent/onceEvent/offEvent/sendEvent)
- Theme (themeToCssVars, presets)
- Components (List, TextInput, Snackbar)

---

## Roadmap / ideas
- Integrations: more helpers for inventory/phone/commands
- More components: panel menu, tables, tooltips, dropdowns, buttons/icon-buttons
- Accessibility: better keyboard and ARIA support

PRs/issues welcome.

---

## License
MIT

### Author
Bl4ck3d :)

---

## Polski
Przyjazny core UI dla FiveM w Svelte. Dostajesz wspólne API do komunikacji NUI (UI ↔ Lua), prosty system motywów (theme) oraz gotowe komponenty, z których korzysta większość serwerów (Notification, Modal, ProgressBar, StatusBar, Hotbar, RadialMenu).

### Co to rozwiązuje
- **Uniwersalne UI**: działa z ESX, QB i standalone – bez zależności od frameworka.
- **Jedno API zdarzeń**: koniec z każdym pluginem pisanym inaczej. Masz `onEvent` i `sendEvent`.
- **Personalizacja wyglądu**: kolory, czcionki, promienie – dostosujesz do brandingu serwera.
- **Szybki start**: od instalacji do działającego HUD-a w kilka minut.

---

## Instalacja

```bash
npm i fivem-ui-core
```

- Wymaga Svelte ^5 jako peer dependency.
- Budujesz swoją aplikację (HUD, telefon, inventory) w Svelte i po prostu importujesz komponenty oraz API z `fivem-ui-core`.

---

## Szybki start (Svelte)

1) Owiń aplikację w `ThemeProvider` (domyślny theme działa od razu, ale możesz podać własny):

```svelte
<script>
  import { ThemeProvider, Notification, ProgressBar } from 'fivem-ui-core';
  let hp = 75;

  const theme = {
    colors: {
      primary: '#4CC9F0',
      success: '#2ecc71',
      warning: '#f39c12',
      error: '#e74c3c',
      surface: '#161616',
      onSurface: '#ffffff',
      border: '#2a2a2a'
    },
    radius: '10px',
    fontFamily: 'Inter, system-ui, sans-serif'
  };
</script>

<ThemeProvider {theme}>
  <Notification type="success" message="Zalogowano pomyślnie!" />
  <ProgressBar value={hp} max={100} />
</ThemeProvider>
```

2) Odbierz zdarzenie z Lua i pokaż notyfikację:

```ts
import { onEvent } from 'fivem-ui-core';

onEvent('showNotify', (data) => {
  // { type: 'info' | 'success' | 'warning' | 'error', message: string }
  console.log('Powiadomienie:', data);
});
```

3) Wyślij callback z UI do Lua:

```ts
import { sendEvent } from 'fivem-ui-core';
await sendEvent('callbackDone', { ok: true });
```

---

## Komunikacja NUI (UI ↔ Lua)

### Z UI (Svelte) do Lua
- Użyj `sendEvent(eventName, data)` – wewnętrznie robi POST do `https://<resource>/<eventName>`.
- Działa w FiveM. W trybie dev (poza FiveM) loguje do konsoli (no-op), aby nie blokować pracy.

```ts
import { sendEvent } from 'fivem-ui-core';

await sendEvent('playerReady', { name: 'John' });
```

### createNuiClient – timeouty, retry, JSON
Jeśli potrzebujesz większej niezawodności, użyj klienta z wbudowanymi timeoutami, retry (exponential backoff) i loggerem.

```ts
import { createNuiClient } from 'fivem-ui-core';

const client = createNuiClient({
  timeoutMs: 5000,     // domyślnie 5000
  retries: 2,          // domyślnie 2 próby
  backoffMs: 300,      // domyślnie 300ms, rośnie wykładniczo per próba
  logger: (level, message, meta) => console[level]?.('[nui]', message, meta)
});

// surowy Response
const res = await client.send('inventory:save', { items: [] });
if (!res.ok) throw new Error('Błąd zapisu');

// automatyczny parse JSON
const data = await client.sendJson('player:getProfile', { id: 123 });
```

Najlepsze praktyki:
- Unikaj spamu eventów: batchuj aktualizacje, używaj debouncingu/throttlingu.
- Dla akcji krytycznych używaj `sendJson` z walidacją odpowiedzi.
- W UI pokazuj stan „w toku”, a przy błędzie – spróbuj ponownie lub zaproponuj retry.

Po stronie Lua (client.lua):

```lua
-- Rejestrujesz callback o tej samej nazwie
RegisterNUICallback('playerReady', function(data, cb)
  print('UI powiedziało:', json.encode(data))
  cb({ ok = true })
end)
```

### Z Lua do UI (Svelte)
- Po stronie Lua wołasz `SendNUIMessage` z `action` i `data`.
- Po stronie UI nasłuchujesz tego `action` przez `onEvent`.

```lua
SendNUIMessage({
  action = 'showNotify',
  data = { type = 'info', message = 'Nowe powiadomienie!' }
})
```

```ts
import { onEvent } from 'fivem-ui-core';

onEvent('showNotify', (data) => {
  // zrób np. toast ze stylowaniem wg type
});
```

### Użyteczne wskazówki FiveM
- Pamiętaj o focusie: `SetNuiFocus(true, true)` aby UI mogło przyjmować input.
- Po zamknięciu UI: `SetNuiFocus(false, false)`.
- Zadbaj o zgodność nazw: `SendNUIMessage.action` ↔ `onEvent('<action>')` oraz `sendEvent('<event>')` ↔ `RegisterNUICallback('<event>')`.

---

## Theming (motywy)
- Motyw przekazujesz do `ThemeProvider`.
- Wewnątrz generowane są zmienne CSS, które wykorzystują komponenty.

Klucze motywu:
- `colors.primary|success|warning|error|surface|onSurface|border`
- `radius` – promień zaokrąglenia komponentów
- `fontFamily` – główna czcionka

Minimalny przykład:

```svelte
<script>
  import { ThemeProvider, defaultTheme } from 'fivem-ui-core';
  // możesz skopiować defaultTheme i zmienić tylko wybrane pola
  const theme = {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: '#00E5A8'
    },
    radius: '12px'
  };
</script>

<ThemeProvider {theme}>
  <slot />
</ThemeProvider>
```

### Presety motywów i palety serwerowe
- Dostępne są gotowe presety: `presetLight`, `presetDark` oraz przykładowe `serverPalettes` (red/blue/purple).

```ts
import { presetLight, presetDark, serverPalettes } from 'fivem-ui-core';

// Light
const themeLight = presetLight;

// Dark z podmienioną paletą primary na serwerową "purple"
const themeDarkPurple = {
  ...presetDark,
  colors: {
    ...presetDark.colors,
    primary: serverPalettes.purple.primary
  }
};
```

---

## Komponenty (przegląd)

### Notification
- **Props**: `type = 'info' | 'success' | 'warning' | 'error'`, `message`, `icon?`
- **Użycie**:

```svelte
<Notification type="success" message="Operacja zakończona" />
```

### Modal
- **Props**: `open` (bind), `title`
- **Sloty**: default, `actions`

```svelte
<script>
  let open = true;
</script>

<Modal bind:open title="Przykładowy modal">
  Treść modala
  <div slot="actions">
    <button on:click={() => (open = false)}>Zamknij</button>
  </div>
</Modal>
```

### ProgressBar
- **Props**: `value`, `max = 100`, `color?`
- **Slot**: `label` (domyślnie procent)

```svelte
<ProgressBar value={75} />
<ProgressBar value={30} color="#ff4d4f" />
```

### ProgressCircle
- **Props**: `value`, `max = 100`, `size = 48`, `stroke = 6`, `color?`

```svelte
<ProgressCircle value={hp} max={100} size={64} />
```

### StatusBar
- **Props**: `hp`, `hunger`, `stamina` (0–100)

```svelte
<StatusBar hp={75} hunger={50} stamina={90} />
```

### Hotbar
- **Props**: `items: { slot: number; label?: string; icon?: string }[]`, `selected?: number`

```svelte
<Hotbar items={[{ slot: 1, label: 'Pistolet' }, { slot: 2, label: 'Apteczka' }]} selected={1} />
```

### RadialMenu
- **Props**: `open`, `items: { id: string; label: string }[]`
- **Zdarzenia**: `on:select={(e) => e.detail /* id */}`

```svelte
<RadialMenu
  open
  items={[{ id: 'anim', label: 'Animacja' }, { id: 'veh', label: 'Pojazd' }]}
  on:select={(e) => console.log('Wybrano:', e.detail)}
/>
```

### List
- **Props**: `items: { id; label; description? }[]`, `selectedId?`, `onSelect?`

```svelte
<script>
  import { List } from 'fivem-ui-core';
  let selected = null;
</script>

<List items={[{ id: 1, label: 'Opcja A' }, { id: 2, label: 'Opcja B', description: 'Opis' }]} onSelect={(id) => selected = id} />
```

### TextInput
- **Props**: `value`, `placeholder?`, `label?`, `type = 'text'|'password'|'number'`, `disabled?`, `name?`, `id?`, `onEnter?`

```svelte
<script>
  import { TextInput } from 'fivem-ui-core';
  let nick = '';
  function handleEnter(v) { console.log('Enter:', v); }
</script>

<TextInput bind:value={nick} label="Nick" placeholder="Wpisz nick" onEnter={handleEnter} />
```

### ContextMenu
- **Props**: `open`, `x`, `y`, `items: { id; label; disabled? }[]`
- **Zdarzenia**: `on:select={(e) => e.detail /* id */}`

```svelte
<script>
  import { ContextMenu } from 'fivem-ui-core';
  let menu = { open: true, x: 300, y: 200 };
  const items = [{ id: 'copy', label: 'Kopiuj' }, { id: 'del', label: 'Usuń', disabled: true }];
</script>

<ContextMenu {items} open={menu.open} x={menu.x} y={menu.y} on:select={(e) => console.log('Wybrano:', e.detail)} />
```

### Snackbar (kolejka toastów)
- **Użycie**: komponent `Snackbar` + store `toasts` oraz helpery `push/remove/clear`

```svelte
<script>
  import { Snackbar, push } from 'fivem-ui-core';
  function show() { push('Operacja zakończona', { type: 'success', timeout: 2000 }); }
</script>

<button on:click={show}>Pokaż toast</button>
<Snackbar position="top-right" />
```

---

## Adaptery (ESX i QB)
- Dla wygody nazw i kompatybilności dodane zostały adaptery `esx` i `qb`, które prefixują zdarzenia/akcje (np. `esx:notify`, `qb:ready`).

```ts
import { esx, qb } from 'fivem-ui-core';

// Nasłuch zdarzenia z Lua (SendNUIMessage action = 'esx:notify')
const off = esx.on('notify', (data) => {
  console.log('ESX notify:', data);
});

// Wysłanie odpowiedzi do Lua (RegisterNUICallback 'qb:ready')
await qb.send('ready', { ok: true });

off();
```

---

## Tryb dev vs. FiveM
- W FiveM UI → Lua używa `GetParentResourceName()` i POST do `https://<resource>/<event>`.
- W trybie dev (przeglądarka poza FiveM) `sendEvent` nie wysyła żądań – loguje dane i zwraca sztuczną odpowiedź `Response { ok: true }`, abyś mógł normalnie rozwijać UI bez błędów sieciowych.

---

## Testy (Vitest + Testing Library)
- Środowisko: `jsdom`, kompilacja Svelte przez wtyczkę Vite.

Skrypty:

```bash
npm test         # jednorazowo
npm run test:watch
```

Przykłady zakresu testów:
- NUI (onEvent/onceEvent/offEvent/sendEvent)
- Theme (themeToCssVars, presety)
- Komponenty (List, TextInput, Snackbar)

---

## Roadmap / pomysły
- Integracje: dodatkowe helpery pod inventory/telefon/komendy
- Więcej komponentów: menu panelowe, tabele, tooltipy, dropdowny, przyciski/icon-buttony
- Accessibility: pełniejsze wsparcie klawiatury i ARIA

Jeśli chcesz coś dodać – PR/issue mile widziane.

---

## Licencja
MIT

### Autor
Bl4ck3d :) 
