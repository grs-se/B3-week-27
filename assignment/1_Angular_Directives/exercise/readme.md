## Challenge Objectives

In this challenge, you will:

1. Use **structural directives** like `*ngIf` and `*ngFor` to conditionally render and loop through elements.
2. Apply **attribute directives** such as `[ngClass]` and `[ngStyle]` to change element appearance based on component logic.
3. Create and use a **custom directive** to modify DOM behavior or style dynamically.

By the end of this challenge, you should be able to:

- Conditionally display tasks.
- Loop through a list of tasks and render them on the screen.
- Dynamically apply styles and classes using component properties.
- Create and use a custom directive to highlight or animate an element.

---

## Instructions

### 1. Setup Component

Create a component named `task-list` with the following files:

- `task-list.component.ts`
- `task-list.component.html`
- `task-list.component.css` (optional)

---

### 2. Structural Directives

#### Component Logic (`task-list.component.ts`):

```ts
export class TaskListComponent {
  tasks = [
    { name: "Buy groceries", important: true },
    { name: "Clean the house", important: false },
    { name: "Read a book", important: true },
  ];

  showTasks = true;
}
```

#### Template (`task-list.component.html`):

```html
<button (click)="showTasks = !showTasks">Toggle Tasks</button>

<ul *ngIf="showTasks">
  <li *ngFor="let task of tasks">{{ task.name }}</li>
</ul>
```

---

### 3. Attribute Directives

Enhance the task display with styles:

```html
<ul *ngIf="showTasks">
  <li *ngFor="let task of tasks" [ngClass]="{ 'important-task': task.important }" [ngStyle]="{ 'font-weight': task.important ? 'bold' : 'normal' }">{{ task.name }}</li>
</ul>
```

Add this style to `task-list.component.css`:

```css
.important-task {
  color: red;
}
```

---

### 4. Custom Directive

#### Create `highlight.directive.ts`:

```ts
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = "lightyellow";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = "";
  }
}
```

#### Use the directive in template:

```html
<p *ngIf="tasks.length > 0" appHighlight>You have {{ tasks.length }} tasks today.</p>
```

---

## Acceptance Criteria

- `*ngIf` is used to toggle visibility of tasks.
- `*ngFor` is used to render the list of tasks.
- `[ngClass]` and `[ngStyle]` are used to style based on importance.
- A custom directive is created to highlight text on hover.
- All features are visible and working when `ng serve` is run.

---

## Bonus

- Add an input to let users add a new task.
- Add a delete button next to each task using event binding.

---

## Useful Resources

- [Angular Directives Documentation](https://angular.io/guide/attribute-directives)
- [ngClass Official Guide](https://angular.io/api/common/NgClass)
- [Creating Custom Directives](https://angular.io/guide/attribute-directives#build-a-custom-directive)
