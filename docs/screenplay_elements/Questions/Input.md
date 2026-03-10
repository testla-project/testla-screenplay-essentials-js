[Back to overview](../../screenplay_elements.md)

# Input

The `Input` class provides a way to verify if an input is empty. It allows for positive and negative checks. This class extends the `Question<boolean>` class. Input does not rely on any specific Ability.

## Table of Contents

- [Input](#input)
  - [Table of Contents](#table-of-contents)
  - [Class Overview](#class-overview)
    - [Extends](#extends)
    - [Methods](#methods)
      - [answeredBy](#answeredby)
      - [is](#is)
      - [isNot](#isnot)
      - [empty](#empty)
      - [failAsFalse](#failasfalse)

## Class Overview

### Extends

This class extends the `Question<boolean>` class, providing specific functionality for verifying states of a given input.

### Methods

#### answeredBy

```typescript
public async answeredBy(actor: Actor): Promise<boolean>;
```

- **Description:** Perform the verification based on the specified action.
- **Parameters:**
  - `actor` - The actor performing the action.
- **Returns:** `Promise<boolean>` - The verification result (true or false).

#### is

*Introduced in: 1.0.0*

```typescript
static get is(): Input;
```

- **Description:** Create a new instance of the `Input` class for positive verification.
- **Returns:** `Input` - A new instance of the `Input` class.

Usage:

```typescript
await actor.asks(
    Input.is.empty(''),
);
```

#### isNot

*Introduced in: 1.0.0*

```typescript
static get isNot(): Input;
```

- **Description:** Create a new instance of the `Input` class for negative verification.
- **Returns:** `Input` - A new instance of the `Input` class.

Usage:

```typescript
await actor.asks(
    Input.isNot.empty('some text'),
);
```

#### empty

*Introduced in: 1.0.0*

```typescript
public empty(input: unknown): Entity;
```

- **Description:** Set up the verification for input emptiness lookup.
- **Returns:** `Input` - The updated instance of the `Input` class.

Usage:

```typescript
// To verify that the input is empty
await actor.asks(
    Input.is.empty(myArray, ''),
);
// To verify that the input is no attribute empty
await actor.asks(
    Input.isNot.empty('some text'),
);
```

#### failAsFalse

*Introduced in: 1.0.0*

```typescript
public get failAsFalse(): Entity;
```

- **Description:** Returns false instead of failing when exception occurrs.
- **Returns:** `Input` - Returns the current question.

Usage:

```typescript
// get evaluation result based on valid check
const evaluationResult = await actor.asks(
    Input.is.empty('some text').failAsFalse,
);
// do whatever necessary with the result
```

[Back to overview](../../screenplay_elements.md)