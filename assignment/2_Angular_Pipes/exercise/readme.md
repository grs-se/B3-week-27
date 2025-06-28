
# Angular Pipes Challenge

In this exercise, you will:

1. Learn how to use **Angular Pipes** to transform data in templates.
2. Use **built-in pipes** such as `date`, `uppercase`, `currency`, etc.
3. Create and apply a **custom pipe** to format data uniquely.

By the end, you should be able to:

- Apply built-in pipes in templates.
- Format strings, dates, and numbers using pipes.
- Build a custom pipe and use it in an Angular component.

---

## 🚀 Challenge Tasks

### ✅ Step 1: Use Built-In Pipes

Update a component template to display transformed data:

**Component:**

```ts
export class PipeDemoComponent {
  birthday = new Date(1995, 6, 15);
  price = 1500;
  name = "angular learners";
}
```

**Template:**

```html
<p>Birthday: {{ birthday | date:'fullDate' }}</p>
<p>Price: {{ price | currency:'USD' }}</p>
<p>Uppercase Name: {{ name | uppercase }}</p>
<p>Lowercase Name: {{ name | lowercase }}</p>
```

### ✅ Step 2: Create a Custom Pipe

**Create Pipe:**

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'exclaim' })
export class ExclaimPipe implements PipeTransform {
  transform(value: string): string {
    return value + '!!!';
  }
}
```

**Usage in Template:**

```html
<p>{{ 'Hello Angular' | exclaim }}</p> <!-- Output: Hello Angular!!! -->
```

Register the pipe in `app.module.ts` under `declarations`.

---

## 🧠 Key Learnings

- Pipes are a powerful way to **transform data** in Angular templates.
- Built-in pipes simplify formatting for strings, dates, and currencies.
- Custom pipes provide **reusable, declarative** logic for display.

---

## ✅ Acceptance Criteria

- Built-in pipes are applied correctly in the template.
- A custom pipe (`exclaim`) is created and displays the correct transformation.
- Component data is shown correctly with the pipe transformations.
