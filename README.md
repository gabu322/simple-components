# Simple Components

**Simple Components** is a collection of reusable React components created for general use. These components are designed to simplify and speed up development by providing commonly used elements such as input fields and buttons. To use the components, simply copy and paste the code into your project.

## Components

### 1. Input

The `Input` component is a customizable input field that supports various sizes, types, masks, and additional features.

#### 1.1. Props

| Prop           | Type     | Default     | Description                                                                                       |
| -------------- | -------- | ----------- | ------------------------------------------------------------------------------------------------- |
| `id`           | string   | `undefined` | The unique ID for the input element.                                                              |
| `className`    | string   | `""`        | Additional CSS classes to style the component.                                                    |
| `name`         | string   | `undefined` | The name of the input field.                                                                      |
| `label`        | string   | `undefined` | The label displayed above the input field.                                                        |
| `type`         | string   | `"text"`    | The type of input (`text`, `password`, `email`, `color`, etc.).                                   |
| `initialValue` | string   | `""`        | The initial value of the input field.                                                             |
| `onChange`     | function | `undefined` | Callback function triggered when the input value changes.                                         |
| `size`         | string   | `"md"`      | The size of the input field (`sm`, `md`, `lg`, `xl`).                                             |
| `mask`         | string   | `undefined` | Mask pattern for input formatting. Supports `a` (letters), `0` (numbers), and `_` (alphanumeric). |
| `currency`     | string   | `undefined` | Adds currency formatting (e.g., `$`, `€`).                                                        |
| `underText`    | string   | `undefined` | Additional text displayed below the input field.                                                  |
| `rounded`      | boolean  | `false`     | Applies full-rounded corners to the input container.                                              |
| `required`     | boolean  | `false`     | Marks the input as required.                                                                      |
| `disabled`     | boolean  | `false`     | Disables the input field.                                                                         |

#### 1.2. Example Usage

```jsx
<Input
  id="example"
  name="example"
  label="Example Input"
  type="text"
  size="lg"
  underText="This is a helper text."
  rounded={true}
  required={true}
  onChange={(e) => console.log(e.target.value)}
/>
```

### 2. Button

The `Button` component is a versatile button with support for links, click handlers, and customizable styles.

#### 2.1 Props

| Prop          | Type      | Default                          | Description                                                                          |
| ------------- | --------- | -------------------------------- | ------------------------------------------------------------------------------------ |
| `className`   | string    | `""`                             | Additional CSS classes to style the component.                                       |
| `type`        | string    | `"button"`                       | The HTML button type (`button`, `submit`, `reset`).                                  |
| `onClick`     | function  | `undefined`                      | Callback function triggered when the button is clicked.                              |
| `color`       | string    | `"bg-blue-600 hover:bg-blue-700` | Prop to use pre defined colors (`blue`, `red`, `green`, `yellow`, `orange`, `black`) |
| `bgColor`     | string    | `undefined`                      | Background color (e.g., "bg-red-500").                                               |
| `transparent` | boolean   | `false`                          | Renders the button with a transparent background.                                    |
| `href`        | string    | `undefined`                      | If provided, renders the button as a link with the given URL.                        |
| `textColor`   | string    | `"text-white"`                   | Text color (e.g., "text-black", "text-red-500").                                     |
| `children`    | ReactNode | `undefined`                      | The content to display inside the button.                                            |
| `disabled`    | boolean   | `false`                          | Disables the button.                                                                 |

#### 2.2. Example Usage

```jsx
<Button
  className="my-4 mx-auto"
  type="submit"
  onClick={() => console.log("Button clicked!")}
  color="red"
  text="Click Me"
  bgColor="bg-red-500 hover:bg-red-600"
  transparent={false}
  textColor="text-white"
  disabled={false}
/>
```

### 3. Select

The `Select` component is a customizable dropdown field that supports various sizes, searchable options, initial values, and additional features like rounded corners and disabled states.

#### 3.1. Props

| Prop           | Type     | Default     | Description                                                                                    |
| -------------- | -------- | ----------- | ---------------------------------------------------------------------------------------------- |
| `id`           | string   | `undefined` | The unique ID for the input element.                                                           |
| `className`    | string   | `""`        | Additional CSS classes to style the component.                                                 |
| `name`         | string   | `undefined` | The name of the input field.                                                                   |
| `label`        | string   | `undefined` | The label displayed above the input field.                                                     |
| `options`      | array    | `undefined` | Array of options to display in the dropdown. Each option is an object with `value` and `text`. |
| `onChange`     | function | `undefined` | Callback function triggered when the selected option changes.                                  |
| `size`         | string   | `"md"`      | The size of the input field (`sm`, `md`, `lg`, `xl`).                                          |
| `initialValue` | string   | `""`        | The initial value of the input field (matches id of an option).                                |
| `searchable`   | boolean  | `true`      | Determines whether the input is searchable.                                                    |
| `showOptionId` | boolean  | `false`     | Displays the option id alongside the name in the dropdown.                                     |
| `rounded`      | boolean  | `false`     | Applies full-rounded corners to the input container.                                           |
| `required`     | boolean  | `false`     | Marks the input as required.                                                                   |
| `disabled`     | boolean  | `false`     | Disables the input field.                                                                      |

#### 3.2. Example Usage

```jsx
<Select
  id="example-select"
  name="example"
  label="Example Dropdown"
  options={[
    { id: "1", name: "Option 1" },
    { id: "2", name: "Option 2" },
    { id: "3", name: "Option 3", disabled: true },
  ]}
  size="lg"
  initialValue="2"
  rounded={true}
  required={true}
  searchable={true}
  showOptionId={true}
  onChange={(e) => console.log(e.target.value)}
/>
```

## How to Use

1. Copy the code for the component you want to use.
2. Paste it into your project.
3. Customize the props to fit your needs.

## Installation of Dependencies

If you're using Input or Button components, ensure you have the following installed in your project:

* React
* Next.js (for link support in Button)
* Tailwind CSS (for styles)  
  
## Contributing  

Feel free to contribute by adding more components or enhancing the existing ones. Open a pull request or create an issue for discussion.

## License

This project is open source and available under the MIT License.
