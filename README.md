## @fivem-ui/core

Przyjazny core UI dla FiveM w Svelte. Dostajesz wspólne API do komunikacji NUI (UI ↔ Lua), prosty system motywów (theme) oraz gotowe komponenty, z których korzysta większość serwerów (Notification, Modal, ProgressBar, StatusBar, Hotbar, RadialMenu).

### Co to rozwiązuje
- **Uniwersalne UI**: działa z ESX, QB i standalone – bez zależności od frameworka.
- **Jedno API zdarzeń**: koniec z każdym pluginem pisanym inaczej. Masz `onEvent` i `sendEvent`.
- **Personalizacja wyglądu**: kolory, czcionki, promienie – dostosujesz do brandingu serwera.
- **Szybki start**: od instalacji do działającego HUD-a w kilka minut.

---

## Instalacja

```bash
npm install @fivem-ui/core
```

- Wymaga Svelte (^4 lub ^5) jako peer dependency.
- Budujesz swoją aplikację (HUD, telefon, inventory) w Svelte i po prostu importujesz komponenty oraz API z `@fivem-ui/core`.

---

## Szybki start (Svelte)

1) Owiń aplikację w `ThemeProvider` (domyślny theme działa od razu, ale możesz podać własny):

```svelte
<script>
  import { ThemeProvider, Notification, ProgressBar } from '@fivem-ui/core';
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
import { onEvent } from '@fivem-ui/core';

onEvent('showNotify', (data) => {
  // { type: 'info' | 'success' | 'warning' | 'error', message: string }
  console.log('Powiadomienie:', data);
});
```

3) Wyślij callback z UI do Lua:

```ts
import { sendEvent } from '@fivem-ui/core';
await sendEvent('callbackDone', { ok: true });
```

---

## Komunikacja NUI (UI ↔ Lua)

### Z UI (Svelte) do Lua
- Użyj `sendEvent(eventName, data)` – wewnętrznie robi POST do `https://<resource>/<eventName>`.
- Działa w FiveM. W trybie dev (poza FiveM) loguje do konsoli (no-op), aby nie blokować pracy.

```ts
import { sendEvent } from '@fivem-ui/core';

await sendEvent('playerReady', { name: 'John' });
```

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
import { onEvent } from '@fivem-ui/core';

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
  import { ThemeProvider, defaultTheme } from '@fivem-ui/core';
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

---

## Tryb dev vs. FiveM
- W FiveM UI → Lua używa `GetParentResourceName()` i POST do `https://<resource>/<event>`.
- W trybie dev (przeglądarka poza FiveM) `sendEvent` nic nie wysyła – tylko loguje do konsoli, abyś mógł normalnie rozwijać UI bez błędów sieciowych.

---

## Roadmap / pomysły
- Adaptery: `@fivem-ui/esx`, `@fivem-ui/qb` (helpery pod konkretne ekosystemy)
- Więcej komponentów: listy, inputy, menu kontekstowe, snackbar/queue toasts
- Presety theme’ów: jasny/ciemny + przykładowe serwerowe palety

Jeśli chcesz coś dodać – PR/issue mile widziane.

---

## Licencja
MIT

### Autor
Bl4ck3d :) 
